// Config module for keeping private variables safe
const auth = require('./middleware/auth')
const auth_sekr = require('./middleware/auth_sekr')
const config = require('config');
const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
var cors = require('cors');

const generator = require('generate-password');


const app = express();
app.use(cors());

app.use(bodyparser.json());

//Checking if dbConfig is set
if(!config.get('dbConfig.password')){
    console.error('FATAL ERROR: db_password is not defined');
    process.exit(1);
}

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

// Stworzenie połączenia
const db = mysql.createConnection(config.get('dbConfig'));

// Połączenie
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

global.db = db;

// Wywołanie modułów
const {wyswietlUczniow, dodajUcznia} = require('./routes/uczniowie');
app.get('/uczniowie', auth, wyswietlUczniow);
app.post('/uczniowie', [auth,auth_sekr], dodajUcznia);

const {wyswietlKlasy, dodajKlase} = require('./routes/klasy');
app.get('/klasy', auth, wyswietlKlasy);
app.post('/klasy', [auth,auth_sekr], dodajKlase);

const {wyswietlPrzedmioty, dodajPrzedmiot} = require('./routes/przedmioty');
app.get('/przedmioty', auth, wyswietlPrzedmioty);
app.post('/przedmioty', [auth,auth_sekr], dodajPrzedmiot);

const {wyswietlZajecia, dodajZajecia} = require('./routes/zajecia');
app.get('/zajecia', auth, wyswietlZajecia);
app.post('/zajecia', auth, dodajZajecia);

const {wyswietlKlasyZajecia, dodajKlaseZajecia} = require('./routes/klasyzajecia');
app.get('/klasy_zajecia', auth, wyswietlKlasyZajecia);
app.post('/klasy_zajecia', auth, dodajKlaseZajecia);

const {wyswietlNauczycieli, dodajNauczyciela} = require('./routes/nauczyciele');
app.get('/nauczyciele', auth, wyswietlNauczycieli);
app.post('/nauczyciele', [auth,auth_sekr], dodajNauczyciela);

const {wyswietlRodzicow, dodajRodzica} = require('./routes/rodzice');
app.get('/rodzice', auth, wyswietlRodzicow);
app.post('/rodzice', [auth,auth_sekr], dodajRodzica);

const {wyswietlRozmowcow, dodajRozmowce} = require('./routes/rozmowcy');
app.get('/rozmowcy', auth, wyswietlRozmowcow);
app.post('/rozmowcy', [auth,auth_sekr], dodajRozmowce);

const {logowanie} = require('./routes/logowanie');
app.post('/logowanie',logowanie);

//Nasłuchiwanie

app.listen('3000', () =>{
    console.log('Server started on port 3000');
});
// Config module for keeping private variables safe
const config = require('config');
const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
var generator = require('generate-password');


const app = express();
app.use(bodyparser.json());

//Checking if dbConfig is set
if(!config.get('dbConfig.password')){
    console.error('FATAL ERROR: db_password is not defined');
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
app.get('/uczniowie', wyswietlUczniow);
app.post('/uczniowie', dodajUcznia);

const {wyswietlKlasy, dodajKlase} = require('./routes/klasy');
app.get('/klasy', wyswietlKlasy);
app.post('/klasy', dodajKlase);

const {wyswietlPrzedmioty, dodajPrzedmiot} = require('./routes/przedmioty');
app.get('/przedmioty', wyswietlPrzedmioty);
app.post('/przedmioty', dodajPrzedmiot);

const {wyswietlZajecia, dodajZajecia} = require('./routes/zajecia');
app.get('/zajecia', wyswietlZajecia);
app.post('/zajecia', dodajZajecia);

const {wyswietlKlasyZajecia, dodajKlaseZajecia} = require('./routes/klasyzajecia');
app.get('/klasy_zajecia', wyswietlKlasyZajecia);
app.post('/klasy_zajecia', dodajKlaseZajecia);

const {wyswietlNauczycieli, dodajNauczyciela} = require('./routes/nauczyciele');
app.get('/nauczyciele', wyswietlNauczycieli);
app.post('/nauczyciele', dodajNauczyciela);

const {wyswietlRodzicow, dodajRodzica} = require('./routes/rodzice');
app.get('/rodzice', wyswietlRodzicow);
app.post('/rodzice', dodajRodzica);

//Nasłuchiwanie

app.listen('3000', () =>{
    console.log('Server started on port 3000');
});
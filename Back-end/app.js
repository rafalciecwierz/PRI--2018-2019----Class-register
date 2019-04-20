const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

// Stworzenie połączenia
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'harmonia',
    multipleStatements: true
});

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

//Nasłuchiwanie

app.listen('3000', () =>{
    console.log('Server started on port 3000');
});
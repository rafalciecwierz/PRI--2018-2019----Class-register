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

//Wyświetlanie list
app.get('/uczniowie', (req, res) =>{
    let sql = 'SELECT * FROM uczniowie';
    let query = db.query(sql, (err, rows, fields) => {
        if(err) throw err;
        res.send(rows);
    })
})

app.get('/klasy', (req, res) =>{
    let sql = 'SELECT * FROM klasy';
    let query = db.query(sql, (err, rows, fields) => {
        if(err) throw err;
        res.send(rows);
    })
})

//Dodawanie danych do tabeli
app.post('/klasy',(req,res) =>{
    let emp = req.body;
    let sql = "SET @ID_KLASY = ?; SET @NR_KLASY = ?; SET @LIT_KLASY = ?; \
    INSERT INTO klasy VALUES (@ID_KLASY, @NR_KLASY, @LIT_KLASY);";
    let query = db.query(sql,[emp.ID_KLASY,emp.NR_KLASY,emp.LIT_KLASY], (err, rows, fields) =>{
        if(err) throw err;
        res.send(rows);
    })
})

app.post('/uczniowie',(req,res) =>{
    let emp = req.body;
    let sql = "SET @ID_UCZNIA = ?; SET @IMIE = ?; SET @IMIE2 = ?; SET @NAZWISKO = ?; SET @ADRES = ?; SET @MIASTO = ?; SET @KODPOCZTOWY = ?; SET @ID_KLASY = ?; \
    INSERT INTO uczniowie VALUES (@ID_UCZNIA, @IMIE, @IMIE2, @NAZWISKO, @ADRES, @MIASTO, @KODPOCZTOWY, @ID_KLASY);";
    let query = db.query(sql,[emp.ID_UCZNIA, emp.IMIE, emp.IMIE2, emp.NAZWISKO, emp.ADRES, emp.MIASTO, emp.KODPOCZTOWY, emp.ID_KLASY], (err, rows, fields) =>{
        if(err) throw err;
        res.send(rows);
    })
})

//Nasłuchiwanie

app.listen('3000', () =>{
    console.log('Server started on port 3000');
});
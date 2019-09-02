module.exports = {
    wyswietlUczniow: (req, res) => {
                let sql = `SELECT CONCAT(IMIE, " ", IMIE2, " ", NAZWISKO) as nazwa, CONCAT(ADRES, ", ", CONCAT(SUBSTRING(KODPOCZTOWY , 1, 2),
                "-",
                   SUBSTRING(KODPOCZTOWY , 3, 3)
            ), " ", MIASTO) as adres, CONCAT(klasy.NR_KLASY, klasy.LIT_KLASY) as klasa  FROM uczniowie INNER JOIN klasy ON uczniowie.ID_KLASY = klasy.ID_KLASY`;
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },

    wyswietlUczniowKlasy: (req, res) => {
        var ID_KLASY = req.body.ID_KLASY;
        let sql = 'SELECT * FROM uczniowie WHERE ID_KLASY = ?';
        let query = db.query(sql, [ID_KLASY], (err, rows, fields) => {
            if(err) throw err;
        res.send(JSON.stringify(rows));
        })
},

    dodajUcznia: (req, res) => {
        let emp = req.body;
        let sql = "SET @ID_UCZNIA = ?; SET @IMIE = ?; SET @IMIE2 = ?; SET @NAZWISKO = ?; SET @ADRES = ?; SET @MIASTO = ?; SET @KODPOCZTOWY = ?; SET @ID_KLASY = ?; \
        INSERT INTO uczniowie VALUES (@ID_UCZNIA, @IMIE, @IMIE2, @NAZWISKO, @ADRES, @MIASTO, @KODPOCZTOWY, @ID_KLASY);";
        let query = db.query(sql,[emp.ID_UCZNIA, emp.IMIE, emp.IMIE2, emp.NAZWISKO, emp.ADRES, emp.MIASTO, emp.KODPOCZTOWY, emp.ID_KLASY], (err, rows, fields) =>{
            if(err) throw err;
            res.send(JSON.stringify(rows));
        })
    },
    planUcznia: (req, res) => {
        var ID = req.body.ID;
        let sql = "SELECT z.ID_ZAJEC, z.OD, z.DO, z.DZIEN, przedmioty.NAZWA FROM zajecia z INNER JOIN przedmioty ON z.ID_PRZEDMIOTU = przedmioty.ID_PRZEDMIOTU INNER JOIN klasy_zajecia ON klasy_zajecia.ID_ZAJEC = z.ID_ZAJEC INNER JOIN klasy ON klasy.ID_KLASY = klasy_zajecia.ID_KLASY INNER JOIN uczniowie ON uczniowie.ID_KLASY = klasy.ID_KLASY WHERE uczniowie.ID_UCZNIA = ? GROUP BY z.ID_ZAJEC ORDER BY DZIEN ASC, OD ASC"
        let query = db.query(sql,[ID], (err, rows, fields) =>{
            if(err) throw err;
            res.send(JSON.stringify(rows));
    })
}
}
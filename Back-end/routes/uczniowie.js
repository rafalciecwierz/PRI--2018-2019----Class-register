module.exports = {
    wyswietlUczniow: (req, res) => {
                let sql = 'SELECT * FROM uczniowie';
                let query = db.query(sql, (err, rows, fields) => {
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
    }
}
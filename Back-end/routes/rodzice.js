var generator = require('generate-password');

module.exports = {
    wyswietlRodzicow: (req, res) => {
                let sql = 'SELECT * FROM rodzice';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajRodzica: (req, res) => {
        var login = generator.generate({
            length: 10,
            numbers: true
        })
        var pass = generator.generate({
            length: 10,
            numbers: true
        })
        let emp = req.body;
        let sql = "SET @ID_RODZICA = ?; SET @IMIE = ?; SET @NAZWISKO = ?; SET @LOGIN = ?; SET @HASLO = ?; SET @EMAIL = ?; SET @TELEFON = ?; SET @ADRES = ?; SET @MIASTO = ?; SET @KODPOCZTOWY = ?; SET @ID_UCZNIA = ?; SET @ID_ROZMOWCY = ?; \
        INSERT INTO rodzice VALUES (@ID_RODZICA, @IMIE, @NAZWISKO, @LOGIN, @HASLO ,@EMAIL, @TELEFON, @ADRES, @MIASTO, @KODPOCZTOWY, @ID_UCZNIA, @ID_ROZMOWCY);";
        let query = db.query(sql,[emp.ID_RODZICA,emp.IMIE,emp.NAZWISKO,login,pass,emp.EMAIL,emp.TELEFON,emp.ADRES,emp.MIASTO,emp.KODPOCZTOWY,emp.ID_UCZNIA,emp.ID_ROZMOWCY], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
    })
    }
}
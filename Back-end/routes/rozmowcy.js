const generator = require('generate-password');
const md5 = require("blueimp-md5")

module.exports = {
    wyswietlRozmowcow: (req, res) => {
                let sql = 'SELECT * FROM rozmowcy';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajRozmowce: (req, res) => {
        var login = generator.generate({
            length: 10,
            numbers: true
        })
        var pass = generator.generate({
            length: 10,
            numbers: true
        })
        
        var hash = md5(pass);

        let emp = req.body;
        let sql = "SET @ID_ROZMOWCY = ?; SET @TYP = ?; SET @ID_TYPU = ?; SET @LOGIN = ?; SET @HASLO = ?; SET @IMIE = ?; SET @NAZWISKO = ?; \
        INSERT INTO rozmowcy VALUES (@ID_ROZMOWCY, @TYP, @ID_TYPU, @LOGIN, @HASLO, @IMIE, @NAZWISKO);";
        let query = db.query(sql,[emp.ID_ROZMOWCY,emp.TYP,emp.ID_TYPU,login,hash,emp.IMIE,emp.NAZWISKO], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
        console.log(pass);
    })
    }
}
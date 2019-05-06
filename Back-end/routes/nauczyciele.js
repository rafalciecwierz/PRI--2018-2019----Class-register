var generator = require('generate-password');

module.exports = {
    wyswietlNauczycieli: (req, res) => {
                let sql = 'SELECT * FROM nauczyciele';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajNauczyciela: (req, res) => {
        var login = generator.generate({
            length: 10,
            numbers: true
        })
        var pass = generator.generate({
            length: 10,
            numbers: true
        })
        let emp = req.body;
        let sql = "SET @ID_NAUCZYCIELA = ?; SET @IMIE = ?; SET @NAZWISKO = ?; SET @LOGIN = ?; SET @HASLO = ?; SET @ID_KLASY = ?; SET @ID_ROZMOWCY = ?; SET @SEKRETARIAT = ?; \
        INSERT INTO nauczyciele VALUES (@ID_NAUCZYCIELA, @IMIE, @NAZWISKO, @LOGIN, @HASLO ,@ID_KLASY, @ID_ROZMOWCY, @SEKRETARIAT);";
        let query = db.query(sql,[emp.ID_NUCZYCIELA,emp.IMIE,emp.NAZWISKO,login,pass,emp.ID_KLASY,emp.ID_ROZMOWCY,emp.SEKRETARIAT], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
    })
    }
}
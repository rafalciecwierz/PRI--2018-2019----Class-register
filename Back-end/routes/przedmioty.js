module.exports = {
    wyswietlPrzedmioty: (req, res) => {
                let sql = 'SELECT * FROM przedmioty';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajPrzedmiot: (req, res) => {
        let emp = req.body;
        let sql = "SET @ID_PRZEDMIOTU = ?; SET @NAZWA = ?; \
        INSERT INTO przedmioty VALUES (@ID_PRZEDMIOTU, @NAZWA);";
        let query = db.query(sql,[emp.ID_PRZEDMIOTU,emp.NAZWA], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
    })
    }
}
module.exports = {
    wyswietlNauczycieli: (req, res) => {
                let sql = 'SELECT * FROM nauczyciele';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajNauczyciela: (req, res) => {
        let emp = req.body;
        let sql = "SET @ID_NAUCZYCIELA = ?; SET @ID_KLASY = ?; SET @ID_ROZMOWCY = ?; \
        INSERT INTO nauczyciele VALUES (@ID_NAUCZYCIELA, @ID_KLASY, @ID_ROZMOWCY);";
        let query = db.query(sql,[emp.ID_NUCZYCIELA,emp.ID_KLASY,emp.ID_ROZMOWCY], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
    })
    }
}
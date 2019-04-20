module.exports = {
    wyswietlZajecia: (req, res) => {
                let sql = 'SELECT * FROM zajecia';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajZajecia: (req, res) => {
        let emp = req.body;
        let sql = "SET @ID_ZAJEC = ?; SET @OD = ?; SET @DO = ?; SET @ID_PRZEDMIOTU = ?; SET @ID_NAUCZYCIELA = ?; @ID_TEMATU = ?; \
        INSERT INTO klasy VALUES (@ID_ZAJEC, @OD, @DO, @ID_PRZEDMIOTU, @ID_NAUCZYCIELA, @ID_TEMATU);";
        let query = db.query(sql,[emp.ID_ZAJEC,emp.OD,emp.DO,emp.ID_PRZEDMIOTU,emp.ID_NAUCZYCIELA,emp.ID_TEMATU], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
    })
    }
}
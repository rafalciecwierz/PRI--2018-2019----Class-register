module.exports = {
    wyswietlKlasyZajecia: (req, res) => {
                let sql = 'SELECT * FROM klasy_zajecia';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajKlaseZajecia: (req, res) => {
        let emp = req.body;
        let sql = "SET @ID_KLASY = ?; SET @ID_ZAJEC = ?; \
        INSERT INTO klasy VALUES (@ID_KLASY, @ID_ZAJEC);";
        let query = db.query(sql,[emp.ID_KLASY,emp.ID_ZAJEC], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
    })
    }
}
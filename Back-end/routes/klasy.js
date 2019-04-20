module.exports = {
    wyswietlKlasy: (req, res) => {
                let sql = 'SELECT * FROM klasy';
                let query = db.query(sql, (err, rows, fields) => {
                    if(err) throw err;
                res.send(JSON.stringify(rows));
                })
    },
    dodajKlase: (req, res) => {
        let emp = req.body;
            let sql = "SET @ID_KLASY = ?; SET @NR_KLASY = ?; SET @LIT_KLASY = ?; \
            INSERT INTO klasy VALUES (@ID_KLASY, @NR_KLASY, @LIT_KLASY);";
            let query = db.query(sql,[emp.ID_KLASY,emp.NR_KLASY,emp.LIT_KLASY], (err, rows, fields) =>{
        if(err) throw err;
        res.send(JSON.stringify(rows));
    })
    }
}
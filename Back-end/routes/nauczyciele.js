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
    },
    planNauczyciela: (req, res) => {
        var ID = req.body.ID;
        let sql = "SELECT z.ID_ZAJEC, z.OD, z.DO, z.DZIEN, przedmioty.NAZWA, GROUP_CONCAT(CONCAT(klasy.NR_KLASY, klasy.LIT_KLASY) SEPARATOR ' ') as KLASY FROM zajecia z INNER JOIN przedmioty ON z.ID_PRZEDMIOTU = przedmioty.ID_PRZEDMIOTU INNER JOIN klasy_zajecia ON klasy_zajecia.ID_ZAJEC = z.ID_ZAJEC INNER JOIN klasy ON klasy.ID_KLASY = klasy_zajecia.ID_KLASY WHERE z.ID_NAUCZYCIELA = ? GROUP BY z.ID_ZAJEC"
        let query = db.query(sql,[ID], (err, rows, fields) =>{
            if(err) throw err;
            res.send(JSON.stringify(rows));
    })
}
}
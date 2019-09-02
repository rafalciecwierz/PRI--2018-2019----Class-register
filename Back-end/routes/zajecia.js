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
    },
    planSekretarki: (req, res) => {
        let sql = "SELECT z.ID_ZAJEC, z.OD, z.DO, z.DZIEN, przedmioty.NAZWA, GROUP_CONCAT(CONCAT(klasy.NR_KLASY, klasy.LIT_KLASY) SEPARATOR ' ') as KLASY, (SELECT CONCAT(rozmowcy.imie, ' ', rozmowcy.nazwisko) FROM nauczyciele INNER JOIN rozmowcy ON nauczyciele.ID_ROZMOWCY = rozmowcy.ID_ROZMOWCY WHERE nauczyciele.ID_NAUCZYCIELA = z.ID_NAUCZYCIELA) as Nauczyciel FROM zajecia z INNER JOIN przedmioty ON z.ID_PRZEDMIOTU = przedmioty.ID_PRZEDMIOTU INNER JOIN klasy_zajecia ON klasy_zajecia.ID_ZAJEC = z.ID_ZAJEC INNER JOIN klasy ON klasy.ID_KLASY = klasy_zajecia.ID_KLASY INNER JOIN uczniowie ON uczniowie.ID_KLASY = klasy.ID_KLASY GROUP BY z.ID_ZAJEC ORDER BY DZIEN ASC, OD ASC, DO ASC"
        let query = db.query(sql, (err, rows, fields) =>{
            if(err) throw err;
            res.send(JSON.stringify(rows));
    })
}
}
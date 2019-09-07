module.exports = {
    wiadomosciPoID: (req, res) => {
        var ID_NADAWCY = req.body.ID_NADAWCY;
        let sql = 'SELECT temat as TEMAT, tresc as TREŚĆ, wyslano as WYSŁANO, imie AS IMIĘ, nazwisko as NAZWISKO FROM wiadomosci INNER JOIN rozmowcy ON wiadomosci.ID_ODBIORCY = rozmowcy.ID_ROZMOWCY WHERE ID_NADAWCY = ?';
        let query = db.query(sql, [ID_NADAWCY], (err, rows, fields) => {
            if(err) throw err;
        res.send(JSON.stringify(rows));
        })
    }
}
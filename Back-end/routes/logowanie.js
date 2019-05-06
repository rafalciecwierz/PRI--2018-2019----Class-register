module.exports = {
    logowanie: (req, res) => {
        var LOGIN = req.body.LOGIN;
        var HASLO = req.body.HASLO;
        if (LOGIN && HASLO) {
            let sql = 'SELECT * FROM nauczyciele WHERE LOGIN = ? AND HASLO = ?';
            let query = db.query(sql,[LOGIN,HASLO], (err, rows, fields) =>{
                if (rows.length > 0) {
                    res.send('Zalogowano!');
                    } 
                else {
                    let sql = 'SELECT * FROM rodzice WHERE LOGIN = ? AND HASLO = ?';
                    let query = db.query(sql,[LOGIN,HASLO], (err, rows, fields) =>{
                        if (rows.length > 0) {
                            res.send('Zalogowano!');
                            } 
                        else {
                            res.send('Niepoprawny login i/lub hasło');
                            }			
                        });
                            }			
                        });
        } 
        else {
            res.send('Podaj login i hasło!');
            res.end();
            }
    }
}
const md5 = require("blueimp-md5")
const jwt = require('jsonwebtoken')

module.exports = {
    logowanie: (req, res) => {
        var LOGIN = req.body.LOGIN;
        var PASSWORD = req.body.PASSWORD;
        if (LOGIN && PASSWORD) {
            let sql = 'SELECT typ, id_typu, imie, nazwisko FROM rozmowcy WHERE LOGIN = ? AND HASLO = ?';
            let query = db.query(sql,[LOGIN,md5(PASSWORD)], (err, rows, fields) => {
                if (rows.length == 1) {
                    var payload = rows[0];
                    const token = jwt.sign({payload},'privateKey');
                    res.send(token);
				} 
                else {
                    res.send('Error - zły login lub hasło!');
				}
			});
        } 
        else {
            res.send('Podaj login i hasło!');
            res.end();
		}
    }
} 
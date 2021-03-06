const md5 = require("blueimp-md5")
const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = {
    logowanie: (req, res) => {
        var LOGIN = req.body.LOGIN;
        var PASSWORD = req.body.PASSWORD;
        if (LOGIN && PASSWORD) {
            let sql = 'SELECT typ, id_typu, imie, nazwisko, login, haslo FROM rozmowcy WHERE LOGIN = ? AND HASLO = ?';
            let query = db.query(sql,[LOGIN,PASSWORD], (err, rows, fields) => {
                if (rows.length == 1) {
                    var payload = rows[0];
                    const token = jwt.sign({payload},config.get('jwtPrivateKey'));
                    // Token used for session purpose
                    newToken = {
                        token: token,
                        role: rows[0].typ,
                        user_id: rows[0].id_typu,
                        username: rows[0].imie
                      };
                      //JSON.stringify(rows[0].typ)
                    res.header('x-auth-token', token).header('role', rows[0].typ).header('name', rows[0].imie).send(newToken);
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

module.exports = function auth_sekr(req, res, next) {
    const role = req.header('role')
    if(role != "s"){
        return res.status(403).send("Odmowa dostępu")
    }
    next();
}
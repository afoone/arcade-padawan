const jwt = require('jsonwebtoken');

const secretKey = "aoidufhqwriebfncvbjhb32564h534i7890y1234irhaeiouf";

const authorize = ( req, res, next ) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.satus(401).send("")
    }
    const token = auth.split(" ")[1];

    jwt.verify(token, secretKey, ( err, usuario) => {
        if (err) {
            return res.status(403).jsonp({ mensaje: "No autorizado"})
        } else {
            console.log(usuario);
        }
    });
    next();
}

module.exports = authorize;
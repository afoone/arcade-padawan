const jwt = require('jsonwebtoken');

const secretKey = "añslkdfjhgpqoweirutybvcvnmzxz123489765347";

const authorize = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403).send("¿?¿?");
    }else {
        const token = auth.split(" ")[1];
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).jsonp({ msg: "NO autorizado."})
            }else {
                console.log(user);
            }
        });
        next();
    }
}

module.exports = authorize;
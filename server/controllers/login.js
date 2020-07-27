const jwt = require('jsonwebtoken');
const User =require('../models/usuario');
const secretKey = "añslkdfjhgpqoweirutybvcvnmzxz123489765347";

const loginController = {
    login: (req, res) => {
        const { body } = req;
        console.log("body", body);

        User.findOne({ name: body.user }, (err, user) => {
            console.log(user);
            if (err || !user || user.password !== body.password) {
                return res.status(401).send("Usuario no encontrado")
            } else {
                const token = jwt.sign({ user: user }, secretKey, {
                    expiresIn: 60 * 60 * 24
                });
                return res.status(200).jsonp({
                    token,
                    name:user.name,
                    nickName:user.nickName,
                    id:user.id
                })
            }
        })
    }
}

module.exports = loginController;
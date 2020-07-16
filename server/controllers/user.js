
const User = require('../models/usuario');

const userController = {

    createUser: (req, res) => {
        const { body } = req;

        const user = new User();
        user.name = body.name;
        user.nickName = body.nickName;
        user.email = body.email;
        user.password = body.password

        user.save().then(
            user => { return res.status(201).jsonp(user) }
        ).catch(
            err => { return res.status(500).jsonp({ msg: "Error grabando datos del usuario" }) }
        )
    },

    getUser: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            err || !user ? res.staus(404)("<h1>No encontrado<h1>")
                : res.status(200).jsonp(user)
        })
    },

    getUserList: (req, res) => {

        User.find((err, users) => {
            return err ? res.status(500).send("<h1>¡¡¡ERROR!!<h1>")
                : res.status(200).jsonp(users);
        })
    },

    updateUser: (req, res) => {
        const { body, params } = req;
        User.findById(params.id, (err, user) => {
            if (err) {
                return res.status(404)("<h1> Usuario no encontrado </h1>")
            }
            user.name = body.name;
            user.nickName = body.nickName;
            user.email = body.email;
            user.password = body.password;
            user.save().then(
                p => { return res.status(201).jsonp(p) }
            ).catch(
                err => { return res.status(500).jsonp({ msg: "error actualizando usuario" }) }
            )
        })
    },

    deleteUser: (req, res) => {
        const { id } = req.params;
        User.findById(id, (err, user) => {
            if (err) {
                return res.status(500).send("<h1>ERROR 500</h1>");
            }
            if (!user) {
                return res.status(404).send("<h1>No encontrado</h1>")
            }
            user.remove().then(
                p => { return res.status(200).jsonp(p); }
            ).catch(
                err => { return res.status(500).jsonp({ msg: "Error borrando usuario." }) }
            )
        }
        )
    }


}


module.exports = userController;
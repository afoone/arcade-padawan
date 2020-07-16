'use strict'

const mongoose = require('mongoose');
const app = require('./app');


mongoose.connect('mongodb://localhost:27017/arcade').then(
    (res) => {

        app.listen(4000, ()=> {
            console.log('Servidor Arrancado.');
        })
    }
).catch(
    err => {
        console.log('No se ha podido conectar a la base de datos');
    }
)
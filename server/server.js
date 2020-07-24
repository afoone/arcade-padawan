'use strict'

const mongoose = require('mongoose');
const app = require('./app');

const jwt = require("jsonwebtoken");
const authmw = require('./authmw');
const bcrypt = require('bcypt');
const cors = require('cors');

app.use(cors());

const salt = "aoidufhqwriebfncvbjhb32564h534i7890y1234irhaeiouf";



const hashedPassword = bcrypt.hashSync()

mongoose.connect('mongodb://localhost:27017/arcade').then(
    () => {

        app.listen(4000, ()=> {
            console.log('Servidor Arrancado.');
        })
    }
).catch(
    () => {
        console.log('No se ha podido conectar a la base de datos');
    }
)
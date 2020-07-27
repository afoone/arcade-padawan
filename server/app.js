

const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user');
const loginRouter = require('./routes/login')
app.use(express.json());

// para desarrollo
app.use(cors({
    "origin": "http://localhost:8080",
    "methods": "GET,HEAD,PUT,POST,DELETE",
    "prefilghtContinue": false,
    "optionSuccessStatus": 204
}));

// para producción
app.use("/", express.static('server/dist'));
//app.get("/", (req, res) => { return res.send("Esperando compilación") });

app.use("/api/user/", userRouter);
app.use("/api/login/", loginRouter);


module.exports = app;

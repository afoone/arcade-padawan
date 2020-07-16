

const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user');

app.use(express.json());

// para desarrollo
app.use(cors({
    "origin": "http://localhost:4200",
    "methods": "GET,HEAD,PUT,POST,DELETE",
    "prefilghtContinue": false,
    "optionSuccessStatus": 204
}));

// para producción
// app.use("/", express.static('server/dist'));
app.get("/", (req, res) => { return res.send("Esperando compilación") });

app.use("/api/user/", userRouter);

module.exports = app;

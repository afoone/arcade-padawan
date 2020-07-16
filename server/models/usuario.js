const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    nickName: String,
    email: String,
    password: String,
    /* score: [
        {
            scorePalabras: 0,
            game: 'Palabras'
        },
        {
            scoreAhoracado:0,
            game: 'Ahorcado'
        },
        {
            scoreMemory: 0,
            game: 'Memory'
        }
        

    ] */
})

module.exports = mongoose.model('User', userSchema);
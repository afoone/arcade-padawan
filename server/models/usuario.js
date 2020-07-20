const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    nickName: String,
    email: String,
    password: String,
    score: [{
        score: Number,
        game: String
    }]
})

module.exports = mongoose.model('User', userSchema);
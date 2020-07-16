const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    points: 0,
    name: String,
    game: String
})

module.exports = mongoose.model('Score', scoreSchema);
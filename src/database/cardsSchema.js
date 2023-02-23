const mongoose = require('mongoose');


const schemaCard = new mongoose.Schema({
    title: String,
    card_type: String,
    attribute: String,
    types: Array,
    level: Number,
    atk: Number,
    def: Number,
    passcode: Number,
    statuses: String,
    card_description: String
})

module.exports = mongoose.model('cards', schemaCard);
const mongoose = require('mongoose');
const schema = mongoose.Schema

const schemaCard = new schema({
    title: String,
    card_type: String,
    attribute: String,
    types: Array,
    level: Number,
    atk: Number,
    def: Number,
    passcode: Number,
    statuses: String,
    card_description: Number,
    attribute: String
})

const ModelCard = mongoose.model('cards', schemaCard);



const getAllWorkouts = () => {
    return "Json"
}

    

module.exports = {
    getAllWorkouts
}
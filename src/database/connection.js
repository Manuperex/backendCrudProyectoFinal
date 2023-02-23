const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI
mongoose.connect(DB_URI);

const objectdb = mongoose.connection;

objectdb.on ('connected', () => {console.log('correct connection to MongoDB')});
objectdb.on ('error', () => {console.log('Connection error a MongoDB')});


module.exports = mongoose

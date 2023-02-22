const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI
mongoose.connect(DB_URI);

const objectdb = mongoose.connection;

objectdb.on ('connected', () => {console.log('conexion correcta a MongoDB')});
objectdb.on ('error', () => {console.log('Error en la conexion a MongoDB')});


module.exports = mongoose

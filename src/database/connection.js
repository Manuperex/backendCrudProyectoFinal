const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI
mongoose.connect(DB_URI);

const objectdb = mongoose.connection;

objectdb.on ('connected', () => {console.log('conexion correcta a MongoDB')});
objectdb.on ('error', () => {console.log('Error en la conexion a MongoDB')});


module.exports = mongoose

// mongoose.set('strictQuery', true);
// const dbConnect = ()=>{
//     const DB_URI = process.env.DB_URI //Se conecta a la url
//     mongoose.connect(DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }, (err, res)=>{
//         if(!err){
//           console.log('***CONEXION CORRECTA***')
//         }else{
//           console.log('***ERROR DE CONEXION***')
//         }
//     })

// }
// module.exports = { dbConnect }
const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')
require('dotenv').config()

// const { dbConnect } = require('./database/connection')
// dbConnect()
const archivoBD = require('./database/connection')
const app = express();

const bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`) });
// require('dotenv').config()//variables de entorno
// const express = require('express')
// const cors = require('cors')
// const app = express()
// const PORT = process.env.PORT || 3000 //puerto declarado en la variable de entorno
// const { dbConnect } = require('./database/connection') //requiere la conexion




// app.use(cors())
// app.use(express.json()) //permite envie de datos

// app.use('/api/v1/workouts', require('./v1/routes/workoutRoutes')) //ruta de la api

// dbConnect()
// app.listen(PORT, ()=>{ //Api escuchando
//   console.log('api lista por el puerto', PORT)
// })
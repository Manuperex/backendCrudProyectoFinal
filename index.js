const express = require('express');
const v1WorkoutRouter = require('./src/v1/routes/Routes')
require('dotenv').config()

const archivoBD = require('./src/database/connection')
const app = express();

const bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`) });

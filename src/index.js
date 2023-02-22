const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const archivoBD = require('./database/connection')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`) });
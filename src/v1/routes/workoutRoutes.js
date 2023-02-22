const express = require('express');
const router = express.Router();
const workoutConstroller = require('../../controllers/workoutController')

router
    .get('/', workoutConstroller.getAllWorkouts)

    .get('/:_id', workoutConstroller.getOneWorkouts)

    .post('/createNewCards', workoutConstroller.createNewWorkouts)

    .patch('/:_id', workoutConstroller.updateOneWorkouts)

    .delete('/deleteCard', workoutConstroller.deleteOneWorkouts);
    


module.exports = router;
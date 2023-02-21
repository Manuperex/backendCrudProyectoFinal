const express = require('express');
const router = express.Router();
const workoutConstroller = require('../../controllers/workoutController')

router
    .get('/', workoutConstroller.getAllWorkouts)

    .get('/:workoutId', workoutConstroller.getOneWorkouts)

    .post('/:workoutId', workoutConstroller.createNewWorkouts)

    .patch('/:workoutId', workoutConstroller.updateOneWorkouts)

    .delete('/:workoutId', workoutConstroller.deleteOneWorkouts);
    


module.exports = router;
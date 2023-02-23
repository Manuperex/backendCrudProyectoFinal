const express = require('express');
const router = express.Router();
const yugiohConstroller = require('../../controllers/Controller')

router
    .get('/', yugiohConstroller.getAllWorkouts)

    .get('/:_id', yugiohConstroller.getOneWorkouts)

    .post('/createNewCards', yugiohConstroller.createNewWorkouts)

    .patch('/:_id', yugiohConstroller.updateOneWorkouts)

    .delete('/deleteCard', yugiohConstroller.deleteOneWorkouts);
    


module.exports = router;
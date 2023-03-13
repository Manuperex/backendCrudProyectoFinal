const express = require('express');
const router = express.Router();
const yugiohConstroller = require('../../controllers/Controller')

router
    .get('/', yugiohConstroller.getAllCards)

    .get('/:_id', yugiohConstroller.getOneCard)

    .post('/createNewCards', yugiohConstroller.createNewCard)

    .patch('/:_id', yugiohConstroller.updateOneCard)

    .delete('/deleteCard', yugiohConstroller.deleteOneCard);
    


module.exports = router;
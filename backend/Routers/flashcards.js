const express = require('express');
const router = express.Router();

const { 
    getFlashcard
} = require('../Controllers/flashcards')

router.get('/:id', getFlashcard)
//router.get('/due/:userId', flashcardController.getDueFlashcards);

module.exports = router;

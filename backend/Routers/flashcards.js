const express = require('express');
const router = express.Router();

const { 
    getFlashcard,
    getDueFlashcards
} = require('../Controllers/flashcards')

router.get('/:id', getFlashcard)
router.get('/due/:userId', getDueFlashcards);

module.exports = router;

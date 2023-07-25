const express = require('express');
const router = express.Router();

const { 
    getFlashcard,
    getDueFlashcards,
    reviewFlashcard
} = require('../Controllers/flashcards')

router.get('/:id', getFlashcard)
router.get('/due/:userId', getDueFlashcards);
router.post('/:id/review', reviewFlashcard)

module.exports = router;

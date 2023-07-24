const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcard');

router.get('/due/:userId', flashcardController.getDueFlashcards);

module.exports = router;

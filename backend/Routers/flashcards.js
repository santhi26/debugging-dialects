const express = require('express');
const router = express.Router();


const { 
    getFlashcard,
    getDueFlashcards,
    reviewFlashcard,
    getAllFlashcardsForLevelAndLanguage,
    createFlashcard,
    promptFlashcard
} = require('../Controllers/flashcards')

router.get('/:id', getFlashcard)
router.get('/due/:userId', getDueFlashcards);
router.post('/:id/review', reviewFlashcard)
router.get('/:level/:language', getAllFlashcardsForLevelAndLanguage);
router.post('/create', createFlashcard);
router.post('/prompt/:userId', promptFlashcard);


module.exports = router;

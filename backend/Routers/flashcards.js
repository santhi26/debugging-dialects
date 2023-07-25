const express = require('express');
const router = express.Router();


const { 
    getFlashcard,
    getDueFlashcards,
    reviewFlashcard,
    getAllFlashcardsForLevelAndLanguage,
    createFlashcard,
    promptFlashcard,
    getDueUserFlashcards,
    reviewUserFlashcard
} = require('../Controllers/flashcards')

router.get('/:id', getFlashcard)
router.get('/due/:userId', getDueFlashcards);
router.post('/:id/review', reviewFlashcard)
router.get('/:level/:language', getAllFlashcardsForLevelAndLanguage);
router.post('/create', createFlashcard);


router.post('/usercards/:id/review', reviewUserFlashcard)
router.post('/usercards/prompt/:userId', promptFlashcard);
router.get('/usercards/due/:userId', getDueUserFlashcards);


module.exports = router;

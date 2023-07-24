const flashcardModel = require('../models/flashcard');

async function getDueFlashcards(req, res) {
    try {
        const flashcards = await flashcardModel.getDueFlashcards(req.params.userId);
        res.status(200).json(flashcards);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Could not get flashcards.' });
    }
}

module.exports = {
    getDueFlashcards,
};

const Flashcard = require('../Models/flashcards');

// Fetch a flashcard by its ID
const getFlashcard = async (req, res) => {
    const id = parseInt(req.params.id, 10) // Make sure id is an integer
  
    const flashcard = await Flashcard.getById(id)
  
    if (flashcard.error) {
      res.status(500).json({ error: flashcard.error })
    } else if (!flashcard) {
      res.status(404).json({ error: 'Flashcard not found' })
    } else {
      res.status(200).json({ flashcard: flashcard })
    }
  }

module.exports = {
    getFlashcard,
};

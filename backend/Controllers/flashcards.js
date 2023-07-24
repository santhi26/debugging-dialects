const Flashcard = require('../Models/flashcards');
const Students = require('../Models/students');
const sm2 = require('../utils/sm2');

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

// Fetch all due flashcards for a user by user's ID
const getDueFlashcards = async (req, res) => {
  const userId = parseInt(req.params.userId, 10)

  // Fetch user's level
  const level = await Students.getLevel(userId);

  if (!level || level.error) {
    return res.status(500).json({ error: level.error });
  }

  const flashcards = await Flashcard.getDueFlashcards(userId, level);

  if (flashcards.error) {
    return res.status(500).json({ error: flashcards.error });
  } else if (!flashcards) {
    return res.status(404).json({ error: 'No due flashcards found' });
  } else {
    return res.status(200).json({ dueFlashcards: flashcards });
  }
}

// For reviewing flashcards
const reviewFlashcard = async (req, res) => {
  const { card_id, user_id, reviewResult } = req.body;

  const flashcardReview = await Flashcard.getReview(card_id, user_id);

  if (flashcardReview.error) {
    res.status(500).json({ error: flashcardReview.error })
  } else {
    const updatedReview = sm2.review({...flashcardReview, easeFactor: flashcardReview.ease_factor}, reviewResult); 
    updatedReview.reviewResult = reviewResult;
    const result = await Flashcard.updateReview(card_id, user_id, updatedReview);
    
    if (result.error) {
      res.status(500).json({ error: result.error })
    } else {
      res.status(200).json({ review: result })
    }
  }
}


module.exports = {
  getFlashcard,
  getDueFlashcards,
  reviewFlashcard,
};

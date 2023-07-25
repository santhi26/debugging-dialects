const db = require('../database/db');
const sm2 = require('../utils/sm2');
const Flashcard = {
  // Get a flashcard by its ID
  getById: async (id) => {
    try {
      const flashcard = await db.query('SELECT * FROM flashcards WHERE flashcard_id = $1', [id]);
      if (flashcard.rows.length > 0) {
        return flashcard.rows[0];
      } else {
        return { error: "Flashcard not found" };
      }
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

// Get all due flashcards for a user by user's ID
getDueFlashcards: async (userId, level, homeLanguage) => {
  try {
    const result = await db.query(`
      SELECT 
        flashcards.*,
        flashcards_normal.*,
        flashcards_review_history.next_review_date
      FROM flashcards 
      LEFT JOIN flashcards_normal ON flashcards.flashcard_id = flashcards_normal.flashcard_id
      LEFT JOIN flashcards_review_history ON flashcards.flashcard_id = flashcards_review_history.card_id
        AND flashcards_review_history.user_id = $2
      WHERE flashcards.level <= $1
        AND flashcards.language = $3
        AND (flashcards_review_history.next_review_date <= CURRENT_DATE 
             OR flashcards_review_history.next_review_date IS NULL)
      ORDER BY flashcards_review_history.next_review_date DESC
    `, [level, userId, homeLanguage]);
    
    return result.rows;
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
},



// Get a flashcard's review by card ID and user ID
getReview: async (card_id, user_id) => {
  try {
    const review = await db.query(`
      SELECT * 
      FROM flashcards_review_history 
      WHERE card_id = $1 AND user_id = $2 
      ORDER BY review_id DESC
      LIMIT 1
    `, [card_id, user_id]);
    if (review.rows.length > 0) {
      return review.rows[0];
    } else {
      // If there's no review history, return a default object and flag as new
      return {
        isNew: true, // Flag indicating that this is a new review record
        card_id: card_id,
        user_id: user_id,
        ease_factor: 2.5, // Default ease factor
        repetitions: 0,
      };
    }
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
},
// Insert a flashcard's review by card ID, user ID, and review data
insertReview: async (card_id, user_id, review) => {
  try {
    const result = await db.query(
      'INSERT INTO flashcards_review_history (next_review_date, ease_factor, repetitions, review_result, card_id, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
      [review.nextReviewDate.toISOString(), review.newEaseFactor, review.repetition, review.reviewResult, card_id, user_id]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
},
  // Update a flashcard's review by card ID, user ID, and review data
  updateReview: async (card_id, user_id, review) => {
    try {
      const result = await db.query(
        'UPDATE flashcards_review_history SET next_review_date = $1, ease_factor = $2, repetitions = $3, review_result = $4 WHERE card_id = $5 AND user_id = $6 RETURNING *', 
        [review.nextReviewDate, review.newEaseFactor, review.repetition, review.reviewResult, card_id, user_id]
      );
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

// Get all flashcards of a certain level and language
getAllByLevelAndLanguage: async (level, language) => {
  try {
    const result = await db.query(`
      SELECT 
        flashcards.*,
        flashcards_normal.*
      FROM flashcards 
      LEFT JOIN flashcards_normal ON flashcards.flashcard_id = flashcards_normal.flashcard_id
      WHERE flashcards.level = $1
        AND flashcards.language = $2
    `, [level, language]);
    
    return result.rows;
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
},



// USER CREATED FLASHCARDS //

createUserFlashcard: async (user_id, type, title, front, back) => {
  try {
    // Insert new record into user_flashcards
    const flashcard = await db.query(
      'INSERT INTO user_flashcards (user_id, type) VALUES ($1, $2) RETURNING flashcard_id', 
      [user_id, type]
    );

    // If the flashcard was successfully created, insert details into user_flashcards_normal
    if (flashcard.rows.length > 0) {
      const flashcardId = flashcard.rows[0].flashcard_id;
      const details = await db.query(
        'INSERT INTO user_flashcards_normal (flashcard_id, title, front, back) VALUES ($1, $2, $3, $4) RETURNING *', 
        [flashcardId, title, front, back]
      );
      return details.rows[0];
    } else {
      return { error: "Error creating flashcard" };
    }
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
},

// Get all due user-created flashcards for a user by user's ID
getDueUserFlashcards: async (userId) => {
  try {
    const result = await db.query(`
      SELECT 
        user_flashcards.*,
        user_flashcards_normal.*,
        flashcards_review_history.next_review_date
      FROM user_flashcards 
      LEFT JOIN user_flashcards_normal ON user_flashcards.flashcard_id = user_flashcards_normal.flashcard_id
      LEFT JOIN flashcards_review_history ON user_flashcards.flashcard_id = flashcards_review_history.card_id
        AND flashcards_review_history.user_id = $1
      WHERE (flashcards_review_history.next_review_date <= CURRENT_DATE 
             OR flashcards_review_history.next_review_date IS NULL)
      ORDER BY flashcards_review_history.next_review_date DESC
    `, [userId]);
    
    return result.rows;
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
},







};
module.exports = Flashcard;

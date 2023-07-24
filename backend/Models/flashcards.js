const db = require('../database/db');
const sm2 = require('../utils/sm2');

const Flashcard = {
  // Get a flashcard by its ID
  getById: async (id) => {
    try {
      const flashcard = await db.query('SELECT * FROM flashcards WHERE flashcard_id = $1', [id]);
      console.log("🚀 ~ file: flashcards.js:9 ~ getById: ~ flashcard:", flashcard.rows[0])

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
};

module.exports = Flashcard;

const db = require('../utils/db');

async function getDueFlashcards(userId) {
    try {
        const student = await db.one(`
            SELECT student_level 
            FROM students 
            WHERE student_id = $1
        `, [userId]);

        const flashcards = await db.any(`
            SELECT flashcards.*, flashcards_review_history.next_review_date,
            flashcards_normal.*, flashcards_cloze.*, flashcards_audio.*
            FROM flashcards
            LEFT JOIN flashcards_review_history ON flashcards.flashcard_id = flashcards_review_history.card_id
            LEFT JOIN flashcards_normal ON flashcards.flashcard_id = flashcards_normal.flashcard_id
            LEFT JOIN flashcards_cloze ON flashcards.flashcard_id = flashcards_cloze.flashcard_id
            LEFT JOIN flashcards_audio ON flashcards.flashcard_id = flashcards_audio.flashcard_id
            WHERE flashcards.level = $1 AND (flashcards_review_history.next_review_date <= NOW() OR flashcards_review_history.next_review_date IS NULL)
            ORDER BY flashcards_review_history.next_review_date
        `, [student.student_level]);

        return flashcards;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    getDueFlashcards,
};

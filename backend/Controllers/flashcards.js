const Flashcard = require('../Models/flashcards');
const Students = require('../Models/students');
const sm2 = require('../utils/sm2');
const https = require('https');
require("dotenv").config()

const aiApiKey = process.env.OPENAI_API_KEY;



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

  // Fetch student's home language
  const homeLanguage = await Students.getHomeLanguage(userId);

  if (!level || level.error || !homeLanguage || homeLanguage.error) {
    return res.status(500).json({ error: level.error || homeLanguage.error });
  }

  const flashcards = await Flashcard.getDueFlashcards(userId, level, homeLanguage);

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
  const card_id = req.params.id;
  const { user_id, reviewResult } = req.body;

  let flashcardReview = await Flashcard.getReview(card_id, user_id);

  if (flashcardReview.error) {
    res.status(500).json({ error: flashcardReview.error })
  } else {
    const updatedReview = sm2.review({...flashcardReview, easeFactor: flashcardReview.ease_factor, repetitions: flashcardReview.repetitions}, reviewResult);
    updatedReview.reviewResult = reviewResult;
    let result;
    if (flashcardReview.isNew) { // If the review record is new
      result = await Flashcard.insertReview(card_id, user_id, updatedReview); // Perform INSERT operation
    } else {
      result = await Flashcard.updateReview(card_id, user_id, updatedReview); // Perform UPDATE operation
    }
    if (result.error) {
      res.status(500).json({ error: result.error })
    } else {
      res.status(200).json({ review: result })
    }
  }
}

const getAllFlashcardsForLevelAndLanguage = async (req, res) => {
  const level = parseInt(req.params.level, 10);
  const language = req.params.language;

  const flashcards = await Flashcard.getAllByLevelAndLanguage(level, language);

  if (flashcards.error) {
    return res.status(500).json({ error: flashcards.error });
  } else if (!flashcards) {
    return res.status(404).json({ error: 'No flashcards found' });
  } else {
    return res.status(200).json({ flashcards: flashcards });
  }
}

const createFlashcard = async (req, res) => {
  const { user_id, type, title, front, back } = req.body;

  const flashcard = await Flashcard.createUserFlashcard(user_id, type, title, front, back);

  if (flashcard.error) {
    return res.status(500).json({ error: flashcard.error });
  } else {
    return res.status(201).json({ flashcard: flashcard });
  }
}

const promptFlashcard = async (req, res) => {
  const userId = req.params.userId;
  const apiKey = aiApiKey; 
  const apiUrl = 'api.openai.com';
  const path = '/v1/chat/completions';
  const prompt = req.body.prompt;

  const requestBody = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });
  console.log("🚀 ~ file: flashcards.js:115 ~ promptFlashcard ~ requestBody:", requestBody)

  const options = {
    hostname: apiUrl,
    path: path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };

  const httpsRequest = https.request(options, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      console.log("🚀 ~ file: flashcards.js:134 ~ response.on ~ response:", data)
      const response = JSON.parse(data);
      const generatedContent = response.choices[0].message.content;
      res.json({ generatedContent });
    });
  });

  httpsRequest.on('error', (error) => {
    res.status(500).json({ error: 'An error occurred while creating flashcard.', details: error });
  });

  httpsRequest.write(requestBody);
  httpsRequest.end();
};






module.exports = {
  getFlashcard,
  getDueFlashcards,
  reviewFlashcard,
  getAllFlashcardsForLevelAndLanguage,
  createFlashcard,
  promptFlashcard,
};

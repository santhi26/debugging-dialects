// Include required packages
const express = require('express')
const cors = require('cors')
// const db = require('./utils/db')
require('dotenv').config()

// Initialize Express application
const app = express()

// Enable CORS and JSON parsing
app.use(cors())
app.use(express.json())

// Import user, chat and flashcard routes
const userRoutes = require('./Routers/users')
// const flashcardRoutes = require('./Routers/flashcards')
// const chatRoutes = require('./Routers/chats')

// Define API routes
app.use('/api/user', userRoutes)
// app.use('/api/flashcard', flashcardRoutes)
// app.use('/api/chat', chatRoutes)


app.get('/api/test-db', async (req, res) => {
  try {
    const result = await db.one('SELECT 1');
    res.json(result);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: 'Database connection error' });
  }
});

module.exports = app;

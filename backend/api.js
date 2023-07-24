// Include required packages
const express = require('express')
const cors = require('cors')
const db = require('./database/db')
require('dotenv').config()

// Initialize Express application
const app = express()

// Enable CORS and JSON parsing
app.use(cors())
app.use(express.json())

// Import user, chat, student and flashcard routes
const userRoutes = require('./Routers/users')
const flashcardsRouter = require('./Routers/flashcards')
const studentsRouter = require('./Routers/students')

// Define API routes
app.use('/api/user', userRoutes)
app.use('/api/flashcard', flashcardsRouter)
app.use('/api/student', studentsRouter)

module.exports = app;

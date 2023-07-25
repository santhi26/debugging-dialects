// Include required packages
const express = require('express')
const cors = require('cors')
const http = require('http');
const {Server} = require("socket.io");

const db = require('./database/db')
require('dotenv').config()

// Initialize Express application
const app = express()
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"http://localhost:5173"
    }
})

// Enable CORS and JSON parsing
app.use(cors())
app.use(express.json())

// Import user, chat, student and flashcard routes
const userRoutes = require('./Routers/users')
const flashcardsRouter = require('./Routers/flashcards')
const studentsRouter = require('./Routers/students')
const teachersRouter = require('./Routers/teachers')

// Define API routes
app.use('/api/user', userRoutes)
app.use('/api/flashcard', flashcardsRouter)
app.use('/api/student', studentsRouter)
app.use('/api/teacher', teachersRouter)



const User = require('./SocketClasses/User');
let users = [];
//Will run when a client starts a server connection


//this needs to be re-done massively, but serves as a good example.
//Needs to first check db for user and their messages, if doesn't exist
io.on("connection", socket => {
    console.log(`${socket.id} has connected.`);
    socket.join(socket.id);
    let user;
    socket.on("username", async (username) => { //only needs username, rest of data can be gathered from db...
        socket.username = username;
        if (users.filter(acc => acc.username == username).length > 0) {
            users.forEach(acc => {
                if (acc.username === username) {
                    acc.user_id = socket.id;
                    acc.is_online = true;
                }
            })
        } else {
            const response = await db.query('SELECT * FROM users WHERE username = $1;', [username]);
            user = new User(username, socket.id, response.rows[0].role, true);
            users.push(user);
        }
        // socket.emit('users', users); //this sends the updated user list to all users. suboptimal but acceptable
        console.log(users);
        io.to(socket.id).emit('users', users);

    })

    socket.on("disconnect", ()=>{
        console.log(`${socket.id} has disconnected.`)
        users.forEach(acc => {
            if (acc.username === socket.username) {
                acc.user_id = "";
                acc.is_online = false;
            }
        })
        // would then need to send this info to all users.

    })
})








module.exports = server;

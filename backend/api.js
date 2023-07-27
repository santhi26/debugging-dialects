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
    // console.log(`${socket.id} has connected.`);
    // console.log(`All socket connections`, Object.keys(io.engine.clients))
    socket.join(socket.id);
    let user;
    let messages;
    socket.on("username", async (username) => { //only needs username, rest of data can be gathered from db...
        // console.log(`Incoming username: ${username}`);

        socket.username = username;
        if (users.filter(acc => acc.username == username).length > 0) {
            users.forEach(acc => {
                if (acc.username === username) {
                    acc.user_id = socket.id;
                    acc.is_online = true;

                    user = new User(username, socket.id, acc.role, true);
                }
            })
        } else {
            try {
                const userResponse = await db.query('SELECT * FROM users WHERE username = $1;', [username]);
                user = new User(username, socket.id, userResponse.rows[0].role, true);
                users.push(user);
            } catch(err) {
                console.log({'error': err});
            }
        }
        // socket.emit('users', users); //this sends the updated user list to all users. suboptimal but acceptable
        // console.log(users);
        // io.to(socket.id).emit('users', users);
        io.emit("users", users);

        //here we are going to retrieve all messages where the user is either a sender or recipient and send an array of all messages to the user.
        try {
            const messageResponse = await db.query('SELECT * FROM messages WHERE sender_username = $1 OR recipient_username = $1;', [username]);
            messages = messageResponse.rows
            // console.log(messages);
        } catch(err) {
            console.log({'error': err});
        }
        io.to(socket.id).emit('messages', messages);
        // console.log(messages);
    });


    socket.on('new_message', async (msg)=>{
        // console.log(msg);
        const response = await db.query('INSERT INTO messages(sender_username, recipient_username, message, date_sent) VALUES ($1, $2, $3, $4);', [msg.sender_username, msg.recipient_username, msg.message, msg.date_sent]);

        // socket.to(socket.id).to(msg.recipient_id).emit('new_message', msg);
        io.to(socket.id).emit("new_message", msg);
        io.to(msg.recipient_id).emit("new_message", msg);
    })

    socket.on("disconnect", ()=>{
        // console.log(`${socket.id} has disconnected.`)
        users.forEach(acc => {
            if (acc.username === socket.username) {
                acc.user_id = "";
                acc.is_online = false;
            }
        })
        // console.log(users)
        // would then need to send this info to all users.
        io.emit("users", users);
    })
})








module.exports = server;

import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts';
import { MessageBoard, UserList } from '../../components';

import { socket } from '../../socket';



export default function messagePage() {
    //imports global variables used across app
    const {users, setUsers, messages, setMessages, contextUsername} = useContext(UserContext);
    const [textInput, setTextInput] = useState("");
    const [recipient, setRecipient] = useState("");
    const [displayMessages, setDisplayMessages] = useState([{}]);

    //initiates connection with the socket server
    socket.connect();

    //
    console.log(contextUsername);
    const username = contextUsername;

    //upon loading the page, the username is sent to the server
    useEffect(() => {
        socket.emit("username", username);//can change username variable to be whatever variable holds the username (same for role);
    }, []);

    useEffect(() => { //this is where we need to add all socket event listeners.

        //listens for server sending list of all users.
        socket.on('users', (user) => {
            setUsers(user);
            
        })

        //listens for server sending list of all messages for user.
        socket.on('messages', (messageArray)=>{
            setMessages(messageArray);
        })

        socket.on("new_message", msg => {
            setMessages((messages)=>[...messages, msg]);
        })

        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [socket]);

    function handleInput(e) {
        setTextInput(e.target.value);
    }

    function sendMessage(e) {
        e.preventDefault();
        const recipient_id = users.filter(acc => acc.username === recipient)[0].user_id
        const datetime = new Date();
        socket.emit("new_message", {sender_username:username, recipient_username:recipient, message:textInput, recipient_id:recipient_id, date_sent:datetime});
    }
    



    useEffect(() => {
        setDisplayMessages(messages.filter(msg => {
            if ((msg.sender_username === recipient && msg.recipient_username === username) || (msg.sender_username === username && msg.recipient_username === recipient)){
                return msg
            };
        }))
    }, [recipient, messages]);


    //used for dev testing, can be deleted for production.
    // useEffect(()=>{
    //     console.log(users);
    // }, [users])

    useEffect(()=>{
        console.log('Messages');
        console.log(messages);
    }, [messages])

    return (
        <main className='message-page'>
            {/* <h1>Message Page</h1> */}
            <UserList setRecipient={setRecipient}/>
            <div className='message-panel'>
            <MessageBoard messages={displayMessages} recipient={recipient}/>
                <form id='message-form'>
                    <input type='text' onChange={handleInput}/><button type='submit' onClick={sendMessage}>Send</button>
                </form>
            </div>
            
        </main>
    )
};

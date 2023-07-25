import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts';
import * as Component from '../../components';
import { socket } from '../../socket';



export default function messagePage() {
    // const {users, setUsers, messages, setMessages} = useContext(UserContext);
    // socket.connect();
    // const username = sessionStorage.getItem("username");

    // useEffect(() => {
    //     socket.emit("username", username);//can change username variable to be whatever variable holds the username (same for role);

    //     // socket.on('users', (user) => {
    //     //     console.log(user);
    //     //     setUsers(user);
    //     // })
    // }, []);

    // useEffect(() => { //this is where we need to add all socket event listeners.
    //     socket.on('users', (user) => {
    //         setUsers(user);
    //     })
    // }, [socket]);




    // useEffect(()=>{
    //     console.log(users);
    // }, [users])

    return (
        <>
            <h1>Message Page</h1>
            <Component.Logout />
            <Component.Footer />
            
            
        </>
    )
};

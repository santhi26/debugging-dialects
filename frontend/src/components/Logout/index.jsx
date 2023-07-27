import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function Logout() {
    const {setContextUsername} = useContext(UserContext);
    const navigate = useNavigate()

    const handleClick = () => {
        // Remove items from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('userID');

        // Clear context values
        setContextUsername("");
        setRole("");
        setToken("");
        setUserID("");

        // Navigate back to home
        navigate("/");
    }

  return (
    <button onClick={handleClick} >Logout</button>    
  )
}


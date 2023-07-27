import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function ChatButton() {
    const {setContextUsername} = useContext(UserContext);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/message")
    }

  return (
    <button onClick={handleClick} >Chat</button>    
  )
}

import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function Logout() {
    const {setContextUsername} = useContext(UserContext);
    const navigate = useNavigate()

    const handleClick = () => {
        setContextUsername("")
        navigate("/")
    }

  return (
    <button onClick={handleClick} >Logout</button>    
  )
}


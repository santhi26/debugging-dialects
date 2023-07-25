import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';


export default function Greetings() {
    const {contextUsername} = useContext(UserContext)
  return (
    <p>Hello, {contextUsername}</p>
  )
}

import * as Component from '../../components';
import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function searchTeacher() {

  return (
    <>
        <Component.Greetings />
        <h1>fluentPal</h1>
        <em>Learn a lanugage</em>        
        <Component.Logout />
    </>
  )
}

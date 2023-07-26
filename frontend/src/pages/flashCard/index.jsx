import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
import * as Component from '../../components';


export default function flashCard() {
    const navigate = useNavigate()

    return (
        <>
            <h1>fluentPal</h1>
            <em>Learn a lanugage</em>
            <Component.Greetings />
            <Component.GetFlashCard/>
            <button onCLick={() => navigate("/createFlashCard")}>Create FlashCard</button>
            <Component.Logout />
            <Component.Footer />
            
        </>
    )
};

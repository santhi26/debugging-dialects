import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
import {FlashCardList, FlashCard, GetFlashCard} from '../../components';



export default function flashCard() {

    return (
        <>
            <h1>fluentPal</h1>
            <em>Learn a lanugage</em>
            <GetFlashCard/>
            
        </>
    )
};

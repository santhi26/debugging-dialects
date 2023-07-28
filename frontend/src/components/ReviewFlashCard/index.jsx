import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
import {FlashCardList, FlashCard} from '../'

export default function ReviewFlashCard({review}) {

    const {userID} = useContext(UserContext);

    const reviewFlashCardsAPI = async() => {
        try {
            const options = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: userID,
                    reviewResult: review
                               
                })
            }        
            const response = await fetch(`http://backend-dialects.onrender.com/api/flashcard/${userID}/review
            `, options);
            const data = await response.json();

        } catch (error) {
            console.log(error)
        }               
      }
    
      useEffect(() => {
        if (review !== '') {
          reviewFlashCardsAPI();
        }
      }, [review]);
    
      
  return (
    <div>Review</div>
  )
}

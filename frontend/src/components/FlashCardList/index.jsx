import React from 'react'
import {FlashCard, ReviewFlashCard} from '../'
import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function FlashCardList({flashCards}) {    
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [lastCard, setLastCard] = useState(false);
    const [review, setReview] = useState("")
    const { front, back } = flashCards[currentCardIndex];
     

    const handleNextCard = (e) => {
    setCurrentCardIndex((prevIndex) =>{
      setLastCard(prevIndex === flashCards.length - 1)
      setReview(e.target.value)
      return prevIndex < flashCards.length - 1 ? prevIndex + 1 : prevIndex
    
    });
  };
  // const handlePreviousCard = () => {
  //   setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  // };
  console.log(review)
  return (
    <>
      {lastCard ? (
        <div>
          <p>No more Flash Cards</p>
        </div>
      ) : (
        <>
          <FlashCard question={front} answer={back} />
          <ReviewFlashCard review={review}/>
          <div>
            <button value="Easy" onClick={handleNextCard}>
              Easy
            </button>
            <button value="Good" onClick={handleNextCard}>
              Good
            </button>
            <button value="Hard" onClick={handleNextCard}>
              Hard
            </button>
          </div>
        </>
      )}
    </>
  );
}  

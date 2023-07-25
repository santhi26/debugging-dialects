import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
import {FlashCardList, FlashCard} from '../'

export default function GetFlashCard() {
  const { userID } = useContext(UserContext);
  const [flashCards, setFlashCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    const flashCardsAPI = async() => {
  
      const response = await fetch(`http://localhost:3000/api/flashcard/due/2
      `);
      const data = await response.json();
      setFlashCards(data.dueFlashcards);
      setIsLoading(false); 
    }    
    flashCardsAPI()
  }, [])

  return (
    <>
      {isLoading ? (
        <p>Loading...</p> // Show loading message while data is being fetched
      ) : (
        <FlashCardList flashCards={flashCards} />
      )}  
    
    </>
  )
}

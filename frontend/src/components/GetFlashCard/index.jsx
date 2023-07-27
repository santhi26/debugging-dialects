import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
import {FlashCardList, FlashCard} from '../'

export default function GetFlashCard() {
  const { userID } = useContext(UserContext);
  console.log(userID)
  const [flashCards, setFlashCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    const flashCardsAPI = async() => {
      try {
        const response = await fetch(`http://localhost:3000/api/flashcard/due/${userID}
        `);
        const data = await response.json();
        console.log(data, userID)
        setFlashCards(data.dueFlashcards);
        setIsLoading(false); 
        
      } catch (error) {
        console.log(error)
      }
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

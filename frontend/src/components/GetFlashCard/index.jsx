import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
//import {FlashCardList} from '../FlashCardList'

export default function GetFlashCard() {
  const { userID } = useContext(UserContext);
  const [flashCards, setFlashCards] = useState([]);

  const flashCardsAPI = async() => {

    const response = await fetch(`http://localhost:3000/api/flashcard/due/2`);
    const data = await response.json();
    setFlashCards(data.dueFlashcards)
    console.log(data.dueFlashcards);

  }

  useEffect(() => {
    flashCardsAPI();
  }, [])

  return (
    <FlashCardList flashCards={flashCards} />
  )
}

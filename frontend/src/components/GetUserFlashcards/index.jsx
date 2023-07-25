import React, { useState, useEffect } from "react";

export default function GetUserFlashcards({ userId }) {
  console.log("🚀 ~ file: index.jsx:4 ~ GetUserFlashcards ~ userId:", userId)
  const [flashCards, setFlashCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  

  useEffect(() => {
    const fetchFlashCards = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/flashcard/usercards/due/4`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFlashCards(data.dueFlashcards);
        setCurrentCard(data.dueFlashcards[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlashCards();
  }, [userId]);

  const handleAnswer = async (reviewResult) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/flashcard/usercards/${currentCard.flashcard_id}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId, reviewResult }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const nextCardIndex = flashCards.indexOf(currentCard) + 1;
      if (flashCards[nextCardIndex]) {
        setCurrentCard(flashCards[nextCardIndex]);
        setShowAnswer(false);
      } else {
        alert("You have finished reviewing all due flashcards");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!currentCard) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{showAnswer ? currentCard.back : currentCard.front}</p>
      <button onClick={() => setShowAnswer(true)}>Reveal Card</button>
      {showAnswer && (
        <>
          <button onClick={() => handleAnswer("Easy")}>Easy</button>
          <button onClick={() => handleAnswer("Good")}>Good</button>
          <button onClick={() => handleAnswer("Hard")}>Hard</button>
          <button onClick={() => handleAnswer("Wrong")}>Wrong</button>
        </>
      )}
    </div>
  );
}

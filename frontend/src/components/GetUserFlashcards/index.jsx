import React, { useState, useEffect } from "react";

export default function GetUserFlashcards({ userId }) {
  console.log("🚀 ~ file: index.jsx:4 ~ GetUserFlashcards ~ userId:", userId);
  const [flashCards, setFlashCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchFlashCards = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/flashcard/usercards/due/${userId}`
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
        `http://localhost:3000/api/flashcard/usercards/${currentCard.flashcard_id}/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userId, reviewResult }),
        }
      );
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
    return <p className="loading">Loading...</p>;
  }

 return (
    <div>
      <div className={`flip-card ${showAnswer ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-content">
              <h3>{currentCard.front}</h3>
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h3>{currentCard.front}</h3>
            <p>{currentCard.back}</p>
            <div className="button-container">
          <ul className="wrapper">
            <li className="icon easy" onClick={() => handleAnswer("Easy")}>
              <span className="tooltip">Easy</span>
              <span>
                <i className="fab fa-easy-f"></i>
              </span>
            </li>
            <li className="icon good" onClick={() => handleAnswer("Good")}>
              <span className="tooltip">Good</span>
              <span>
                <i className="fab fa-good"></i>
              </span>
            </li>
            <li className="icon hard" onClick={() => handleAnswer("Hard")}>
              <span className="tooltip">Hard</span>
              <span>
                <i className="fab fa-hard"></i>
              </span>
            </li>
            <li className="icon wrong" onClick={() => handleAnswer("Wrong")}>
              <span className="tooltip">Wrong</span>
              <span>
                <i className="fab fa-wrong"></i>
              </span>
            </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
      <center><button class="cta" onClick={() => setShowAnswer(true)}>
        <span>Reveal Answer</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
        </button></center>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


export default function GetUserFlashcards({ userId }) {
  console.log("🚀 ~ file: index.jsx:4 ~ GetUserFlashcards ~ userId:", userId);
  const [flashCards, setFlashCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [definition, setDefinition] = useState('');

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

  const fetchDefinition = async (word) => {
    try {
      // Replace this with your actual API call to the Free Dictionary API
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      console.log("🚀 ~ file: index.jsx:65 ~ fetchDefinition ~ data:", data)
      
      // This assumes that the definition is in the form data[0].meanings[0].definitions[0].definition
      // You might need to adjust this depending on the actual response structure
      setDefinition(data[0].meanings[0].definitions[0].definition);
    } catch (err) {
      console.error(err);
    }
  }

  if (!currentCard) {
    return <p className="loading">Loading...</p>;
  }

return (
    <div>
      <ReactTooltip place="top" type="dark" effect="float" />
      <div className={`flip-card ${showAnswer ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-content">
              {/* Add data-tip with a unique identifier for the tooltip */}
              <h3
                className="front-heading"
                data-tip={`definition-${currentCard.front}`}
                onMouseEnter={() => fetchDefinition(currentCard.front)}
                onClick={() => fetchDefinition(currentCard.front)}
              >
                {currentCard.front}
              </h3>

              <div className="image-container">
                <img
                  src={currentCard.image_url}
                />
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h3 className="front-heading">{currentCard.front}</h3>
            <h3 className="back-heading">{currentCard.back}</h3>
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

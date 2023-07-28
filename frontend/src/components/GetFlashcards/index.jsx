import React, { useState, useEffect } from "react";

export default function GetUserFlashcards({ userId }) {
  console.log("🚀 ~ file: index.jsx:4 ~ GetUserFlashcards ~ userId:", userId);
  const [flashCards, setFlashCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [noCardsLeft, setNoCardsLeft] = useState(false);
  const [audioElement, setAudioElement] = useState(null);


  useEffect(() => {
    const fetchFlashCards = async () => {
      try {
        const response = await fetch(
          `http://backend-dialects.onrender.com/api/flashcard/due/${userId}`
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

  useEffect(() => {
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, [audioElement]);

  const handleAnswer = async (reviewResult) => {
    try {
      const response = await fetch(
        `http://backend-dialects.onrender.com/api/flashcard/${currentCard.flashcard_id}/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userId, reviewResult }),
        }
      );
      console.log("🚀 ~ file: index.jsx:41 ~ handleAnswer ~ response:", response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const nextCardIndex = flashCards.indexOf(currentCard) + 1;
      if (flashCards[nextCardIndex]) {
        setCurrentCard(flashCards[nextCardIndex]);
        setShowAnswer(false);
      } else {
        setNoCardsLeft(true);  // Set noCardsLeft to true when there are no more cards
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleRevealAnswer = () => {
    setShowAnswer(true);
    const audio = new Audio(currentCard.audio); // Assuming `audio` property in `currentCard` holds the URL for the audio file
    setAudioElement(audio);
    audio.play();
  };

  
  

  if (!currentCard) {
    return <p className="loading">Loading...</p>;
  }


  if (noCardsLeft) {
    return (
      <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-content">
             <h3 className="front-heading">Well done!</h3>
             <br/><br/>
             <p>You've reviewed all your cards for the day!</p>
             <p>Hungry for more? Use our AI to make some!</p>
              <div className="image-container">
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }


 return (
    <div>
      <div className={`flip-card ${showAnswer ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-content">
             <h3 className="front-heading">{currentCard.front}</h3>
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
          <p>{currentCard.thedefinition}</p>
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
      {showAnswer ? null : (
        <center>
          <button className="cta" onClick={handleRevealAnswer}>
            <span>Reveal Answer</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </center>
      )}
    </div>
  );
}

import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

const Flashcard = ({ question, answer, nextAnswer }) => {

  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="flashcard" onClick={toggleAnswer}>
      <div className="flashcard-question">
        <h3>Question:</h3>
        <p>{question}</p>
      </div>
      {showAnswer && (
        <div className="flashcard-answer">
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
export default Flashcard;

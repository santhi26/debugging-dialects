import React, { useContext } from 'react';
import { UserContext } from '../../contexts';
import GetUserFlashcards from '../../components/GetUserFlashcards';
import '../userFlashcardReview/flashcardReview.css';

export default function UserFlashcardReview() {
  const userID = localStorage.getItem("userID");

  return (
    <div className="flashcard-container">
      <h1>fluentPal</h1>
      <GetUserFlashcards userId={userID} />
    </div>
  );
}

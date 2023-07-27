import React, { useContext } from 'react';
import { UserContext } from '../../contexts';
import GetUserFlashcards from '../../components/GetUserFlashcards';
import '../userFlashcardReview/flashcardReview.css';

export default function UserFlashcardReview() {
  const userID = localStorage.getItem("userID");

  return (
    <>
        <div className="nh-hero wf-section">
            <div className="nh-hero-header-wrap">
                <div className="w-layout-blockcontainer nh-hero-header w-container"></div>
                    <div className="flashcard-container">
                      <GetUserFlashcards userId={userID} />
                    </div>
                    </div>
                </div>
    </>
)
}

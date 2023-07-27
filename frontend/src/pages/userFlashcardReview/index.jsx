import React, { useContext } from 'react';
import { UserContext } from '../../contexts';
import GetUserFlashcards from '../../components/GetUserFlashcards';
import '../userFlashcardReview/flashcardReview.css';

export default function UserFlashcardReview() {
  const userID = localStorage.getItem("userID");

return (
    <>
            <div class="general wf-section">
                <div class="overview fluentcontent wf-section">



                <h1 class="page-title">Review Your Flashcards</h1>
                                  <div className="flashcard-container">
                                    <GetUserFlashcards userId={userID} />
                                  </div>



                </div>
            </div>
        </>
    )
}

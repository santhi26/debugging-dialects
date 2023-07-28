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



                                <center><h2 class="pagetitle">Review your flashcards</h2></center>
                                  <div className="flashcard-container">
                                    <GetUserFlashcards userId={userID} />
                                  </div>



                </div>
            </div>
        </>
    )
}

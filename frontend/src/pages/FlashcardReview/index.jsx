import React, { useContext } from 'react';
import { UserContext } from '../../contexts';
import GetFlashcards from '../../components/GetFlashcards';
import '../userFlashcardReview/flashcardReview.css';

export default function UserFlashcardReview() {
  const userID = localStorage.getItem("userID");

return (
    <>
            <div class="general wf-section">
                <div class="overview fluentcontent wf-section">



                                <center><h2 class="pagetitle">Review flashcards</h2></center>
                                  <div className="flashcard-container">
                                    <GetFlashcards userId={userID} />
                                  </div>



                </div>
            </div>
        </>
    )
}

import React, { useContext } from 'react';
import { UserContext } from '../../contexts';
import GetFlashcards from '../../components/GetFlashcards';
import '../userFlashcardReview/flashcardReview.css';
import Footer from '../../components/Footer/index.jsx';

export default function UserFlashcardReview() {
  const userID = localStorage.getItem("userID");

return (
    <>
            <div class="general wf-section">
                <div class="overview fluentcontent wf-section">



                <h1 class="page-title">Review Flashcards</h1>
                                  <div className="flashcard-container">
                                    <GetFlashcards userId={userID} />
                                  </div>



                </div>
                <Footer />
            </div>
        </>
    )
}

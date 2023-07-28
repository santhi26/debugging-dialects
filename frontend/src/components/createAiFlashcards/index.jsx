import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts';
import AiFlashcard from '../aiFlashcard/index.jsx';
import Footer from '../Footer/index.jsx';

export default function createAiFlashcards() {
  const userID = localStorage.getItem("userID");
  const [data, setData] = useState([]);
  const [cardCount, setCardCount] = useState(1);

  const createFlashcardsAPI = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/flashcard/usercards/prompt/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cardCount }),
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createFlashcardsAPI();
  }, [cardCount]);

  return (
    <>
      <div class="general wf-section">
        <div class="overview fluentcontent wf-section">
          <div class="content-wrapper-m-copy center content-section-title">
            <div class="w-richtext">
              <h1 class="page-title">Create AI Flashcards</h1>
              <section id="our-flashcards" class="flashcards-section wf-section">
                <section class="content-wrapper-centered-flash">
                  <div class="title-wrapper-flash-v1">
                    <input
                      type="number"
                      min="1"
                      value={cardCount}
                      onChange={(e) => setCardCount(e.target.value)}
                      placeholder="Number of flashcards to create"
                    />
                    <button onClick={createFlashcardsAPI}>Create Flashcards</button>
                    <div class="flash-content-wrap">
                      <div class="w-layout-flashgrid fgrid-2">
                        {data.map((card) => (
                          <AiFlashcard data={card} key={card.flashcard_id} />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

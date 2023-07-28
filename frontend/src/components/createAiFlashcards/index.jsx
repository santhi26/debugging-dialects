import { useState } from 'react';
import AiFlashcard from '../aiFlashcard/index.jsx';
import Footer from '../Footer/index.jsx';

export default function createAiFlashcards() {
  const userID = localStorage.getItem("userID");
  const [data, setData] = useState([]);
  const [cardCount, setCardCount] = useState(1);

  const createFlashcardsAPI = async () => {
    try {
      const response = await fetch(`https://backend-dialects.onrender.com/api/flashcard/usercards/prompt/${userID}`, {
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

  return (
    <>
      <div className="general wf-section">
        <div className="overview fluentcontent wf-section">
          <div className="content-wrapper-m-copy center content-section-title">
            <div className="w-richtext">
              <h1 className="page-title">Create AI Flashcards</h1>
              <section id="our-flashcards" className="flashcards-section wf-section">
                <section className="content-wrapper-centered-flash">
                  <div className="title-wrapper-flash-v1">
                    <input
                      type="number"
                      min="1"
                      value={cardCount}
                      onChange={(e) => setCardCount(e.target.value)}
                      placeholder="Number of flashcards to create"
                    />
                    <button onClick={createFlashcardsAPI}>Create Flashcards</button>
                    <div className="flash-content-wrap">
                      <div className="w-layout-flashgrid fgrid-2">
                        {data.map((card) => (
                          <AiFlashcard data={card} key={card.flashcard_id} />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                
                <br></br><br></br>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

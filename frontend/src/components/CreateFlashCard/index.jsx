import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';


export default function CreateFlashCard() {
  const { userID } = useContext(UserContext);
  console.log(userID)
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "title") {
        setTitle(value);
    }if (id === "type") {
        setType(value);
    }if (id === "question") {
        setQuestion(value);
    }if (id === "answer") {
        setAnswer(value);
    }      
}

const handleSubmit  = (e) => {
    e.preventDefault();
    flashCardsAPI();
}

  const flashCardsAPI = async() => {
    try {
        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userID,
                type: type,
                title: title,
                front: question,
                back: answer            
            })
        }        
        const response = await fetch(`http://localhost:3000/api/flashcard/create
        `, options);
        const data = await response.json();
        alert("card created")
        
    } catch (error) {
        console.log(error)
    }
           
  }

  useEffect(() => {
    flashCardsAPI();
  }, [])

  return (
    <>
        <div class="general wf-section">
            <div class="overview fluentcontent wf-section">
                <div class="content-wrapper-m-copy center content-section-title">
                    <div class="w-richtext">
                        <div class="w-embed">
                            <h2 class="pagetitle">Create a flashcard</h2>
        <form className="Form" onSubmit={handleSubmit}>
            <div className="title">
                <label className="form_label" htmlFor="title">Title </label>
                <input className="form_input" value={title} onChange = {(e) => handleInputChange(e)} name="" type="text" id="title" placeholder="title" required/>       
            </div>
            <div className="type">
                <label className="form_label" htmlFor="type">Type </label>
                <input className="form_input" value={type} onChange = {(e) => handleInputChange(e)} type="type" id="type" placeholder="type" required/>       
            </div>
            <div className="question">
                <label className="form_label" htmlFor="question">Question </label>
                <input className="form_input" value={question} onChange = {(e) => handleInputChange(e)} type="question" id="question" placeholder="question" required/>       
            </div>   
            <div className="answer">
                <label className="form_label" htmlFor="answer">Answer </label>
                <input className="form_input" value={answer} onChange = {(e) => handleInputChange(e)} type="answer" id="answer" placeholder="answer" required/>       
            </div>                  
            <div className="submit-button">
                <button type="submit" className="btn">Submit</button>
            </div>
        </form>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


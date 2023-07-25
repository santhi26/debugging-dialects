import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
    return (
        <div className="container">
            <div className="globeContainer">
                <div className="globe">
                <h2 className="globeText">Learn English Now</h2>
                </div>
            </div>
            <div className="bottomSection">
                <div className="studentSection">
                    <h3>Student</h3>
                    <p className="pS">Hone your skills with flashcards</p>
                    <p className="pS">Chat to teachers in real time</p>
                    <p className="pS">get word definitions </p>
                </div>
                <div className="teacherSection">
                    <h3>Teacher</h3>
                    <p className="pT">Choose your hours and teach anyone</p>
                    <p className="pT">Teach from home, from anywhere</p>
                    <p className="pT">Earn money, with daily payouts</p>
                </div>
            </div>
        </div>
    )
};

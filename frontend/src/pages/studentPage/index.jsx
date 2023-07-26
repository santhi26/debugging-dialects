import React from 'react';
import * as Component from '../../components';
import {Link} from 'react-router-dom';


export default function studentPage() {
    return (
        <>
            <div className="studentPage">
            <button className="studentbtn"><Link to="/message">Chat</Link></button>
            <button className="studentbtn"><Link to="/student/flashCard">FlashCards</Link></button>
            <Component.SearchStudent />
            <Component.StarRating />
            </div>
        </>
      )    
};

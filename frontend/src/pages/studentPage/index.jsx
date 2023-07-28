import React from 'react';
import * as Component from '../../components';
import {Link} from 'react-router-dom';


export default function studentPage() {
    return (
        <>
            <div class="general wf-section">
                <div class="overview fluentcontent wf-section">
                    <div class="content-wrapper-m-copy center content-section-title">
                        <div class="w-richtext">
                            <div class="w-embed">
                                <h2 class="pagetitle">Welcome student!</h2>
                        <div className="studentPage">
                            <button className="studentbtn"><Link to="/message">Chat</Link></button>
                            <button className="studentbtn"><Link to="/student/flashCard">Revise flashcards</Link></button>
                        <Component.SearchStudent />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

import React from 'react';
import * as Component from '../../components';
import {Link} from 'react-router-dom';


export default function studentPage() {
    return (
        <>
            <div className="nh-hero wf-section">
                <div className="nh-hero-header-wrap">
                    <div className="w-layout-blockcontainer nh-hero-header w-container"></div>
                        <div className="studentPage">
                            <button className="studentbtn"><Link to="/message">Chat</Link></button>
                            <button className="studentbtn"><Link to="/student/flashCard">FlashCards</Link></button>
                        <Component.SearchStudent />
                     </div>
                </div>
            </div>
    </>
)
}

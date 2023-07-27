import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
import * as Component from '../../components';


export default function flashCard() {
    const navigate = useNavigate()

    return (
        <>
            <div className="nh-hero wf-section">
                <div className="nh-hero-header-wrap">
                    <div className="w-layout-blockcontainer nh-hero-header w-container"></div>
                        <Component.Greetings />
                        <Component.GetFlashCard/>
                        <button onClick={() => navigate("/createFlashCard")}>Create FlashCard</button>
                        <Component.Logout />
                        </div>
                </div>
    </>
)
}

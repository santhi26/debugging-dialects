import React from 'react';
import * as Component from '../../components';
import {Link} from 'react-router-dom';

const username = localStorage.getItem("username");


export default function FlashcardDash() {
    return (
        <>
                    <div className="nh-hero wf-section">
                <div className="nh-hero-header-wrap">
                    <h1 class="page-title">Flashcard Dashboard</h1>
                    <div className="w-layout-blockcontainer nh-hero-header w-container">
                    </div>
                </div>
            </div>
            
            <section className="nh-section-inset privacysection wf-section">
                <div className="w-layout-blockcontainer nh-wrap sectionverticalpadding w-container">
                    <div className="nh-section-inner-grid">
                        <div id="w-node-_1b22c488-7d69-553b-e7bd-4359dd6ca000-db6ab9e5" className="nh-section-grid-item">
                            <div className="nh-section-grid-item-title">AI flashcards!</div>
                            <div className="nh-section-grid-item-desc">We use an advanced algorithm to show you flashcards <em>just</em> before you're about to forget.<br></br><br></br>Utalise ChatGPT to create loads more flashcards. The content will be based on your current learning level.<br></br><br></br>Make your own from scratch. We'll gather word definitions and audio pronunciations automatically! Like magic.</div>
                        </div>
                        <div id="w-node-c33cdf7c-471d-fd55-889b-d2d9e498b2af-db6ab9e5" className="nh-section-grid-item">
                            <div className="nh-inner-feature-icon-list">
                                <div className="nh-inner-feature-icon-item">
                                    <div id="w-node-_0ed7c4ff-bef8-42e9-2ed2-4fb12362b78c-db6ab9e5" className="nh-inner-feature-icon-block">
                                        <img src="https://raw.githubusercontent.com/santhi26/debugging-dialects/elliot-dev/frontend/src/assets/icons/brain.png" loading="lazy" width="48" alt="" className="ic-laptop-phone" />
                                    </div>
                                    <div id="w-node-e329728d-5cc3-161b-56e3-a49e1d9d46f0-db6ab9e5" className="nh-inner-feature-details">
                                        <div className="nh-inner-feature-item-title">REVISE: Ready-made</div>
                                        <div className="nh-inner-feature-item-desc">We have thousands of ready-made flashcards for you. And you'll only get shown flashcards at your learning level. As you level-up you'll get more and more.</div>
                                    </div>
                                </div>
                                <div className="nh-inner-feature-icon-item">
                                    <div id="w-node-a4309e21-65da-e3da-ec7d-f8db0be004fe-db6ab9e5" className="nh-inner-feature-icon-block">
                                        <img src="https://raw.githubusercontent.com/santhi26/debugging-dialects/elliot-dev/frontend/src/assets/icons/online.png" loading="lazy" width="48" alt="" className="ic-no-lcoud" />
                                    </div>
                                    <div id="w-node-a4309e21-65da-e3da-ec7d-f8db0be004ff-db6ab9e5" className="nh-inner-feature-details">
                                        <div className="nh-inner-feature-item-title">REVISE: Your flashcards</div>
                                        <div className="nh-inner-feature-item-desc">Revise the flashcards you've created as well as the ones you've got AI to make!</div>
                                    </div>
                                </div>
                                <div className="nh-inner-feature-icon-item">
                                    <div id="w-node-_5d474926-7521-2699-6bbc-1457dc8bc2d8-db6ab9e5" className="nh-inner-feature-icon-block">
                                        <img src="https://raw.githubusercontent.com/santhi26/debugging-dialects/elliot-dev/frontend/src/assets/icons/money.png" loading="lazy" width="42" id="w-node-dc4737ed-5f6a-8e6a-8b18-2dfb05251186-db6ab9e5" alt="" className="ic-incognito" />
                                    </div>
                                    <div id="w-node-_5d474926-7521-2699-6bbc-1457dc8bc2d9-db6ab9e5" className="nh-inner-feature-details">
                                        <div className="nh-inner-feature-item-title">CREATE: AI-generated</div>
                                        <div className="nh-inner-feature-item-desc">Use our state-of-art AI to create flashcards. Tell it the topic and the number you want it to make and <em>boom</em>, new flashcards!</div>
                                    </div>
                                </div>
                                <div className="nh-inner-feature-icon-item">
                                    <div id="w-node-_5d474926-7521-2699-6bbc-1457dc8bc2d8-db6ab9e5" className="nh-inner-feature-icon-block">
                                        <img src="https://raw.githubusercontent.com/santhi26/debugging-dialects/elliot-dev/frontend/src/assets/icons/money.png" loading="lazy" width="42" id="w-node-dc4737ed-5f6a-8e6a-8b18-2dfb05251186-db6ab9e5" alt="" className="ic-incognito" />
                                    </div>
                                    <div id="w-node-_5d474926-7521-2699-6bbc-1457dc8bc2d9-db6ab9e5" className="nh-inner-feature-details">
                                        <div className="nh-inner-feature-item-title">CREATE: Your own</div>
                                        <div className="nh-inner-feature-item-desc">Want to do things the good old-fashioned way? Feel free to make your own. We'll automagically add word definitions and audio pronunciations.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}



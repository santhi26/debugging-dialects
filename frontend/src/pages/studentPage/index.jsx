import React from 'react';
import * as Component from '../../components';
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/index.jsx';

const username = localStorage.getItem("username");


export default function studentPage() {
    return (
        <>
                    <div class="nh-hero wf-section">
                <div class="nh-hero-header-wrap">
                    <div class="w-layout-blockcontainer nh-hero-header w-container">
                    </div>
                </div>
            </div>
            
        <section class="nh-section-inset howitworks wf-section">
  <div class="w-layout-blockcontainer nh-wrap sectionverticalpadding w-container">
    <div class="nh-title-wrap">
      <div class="nh-dashtitle">Welcome {username}!</div>
      <div class="nh-sectionsubtitle">This is your dashboard. You're currently level <Component.SearchStudent />.</div>
    </div>
    <div class="nh-hiw-steps">
      <div class="nh-hiw-step">
        <a href="/message"><img src="https://raw.githubusercontent.com/santhi26/debugging-dialects/elliot-dev/frontend/src/assets/icons/chat.png" loading="lazy" height="60" width="60" alt="" /></a>
        <div class="nh-hiw-text">
          <div class="nh-step-title"><a href="/message">Chat</a></div>
          <div class="nh-step-desc">Head to the chat page to see the currently online <a href="/teacher/list">teachers.</a></div>
        </div>
      </div>
      <div class="nh-hiw-step">
      <a href="/student/flashcards"><img src="https://raw.githubusercontent.com/santhi26/debugging-dialects/elliot-dev/frontend/src/assets/icons/book.png" loading="lazy" width="60" height="60" alt="" /></a>
        <div class="nh-hiw-text">
          <div class="nh-step-title"><a href="/student/flashcards">Flashcards</a></div>
          <div class="nh-step-desc">Hone your skills by revising ready-made on your own flashcards.</div>
        </div>
      </div>
      <div class="nh-hiw-step">
      <a href="/student/account"><img src="https://raw.githubusercontent.com/santhi26/debugging-dialects/elliot-dev/frontend/src/assets/icons/account.png" loading="lazy" width="60" height="60" alt="" /></a>
        <div class="nh-hiw-text">
          <div class="nh-step-title"><a href="/student/account">Account</a></div>
          <div class="nh-step-desc">Update your details. Cancel your subscription. Delete your account.</div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</section>
        </>
    )
}



import React from 'react';
import * as Component from '../../components';
import {Link} from 'react-router-dom';

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
        <img src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bc67270b3b039b770e3afe_hiw-step-1.svg" loading="lazy" height="60" width="60" alt="" />
        <div class="nh-hiw-text">
          <div class="nh-step-title">Chat</div>
          <div class="nh-step-desc">Head to the chat page to see the currently online teachers.</div>
        </div>
      </div>
      <div class="nh-hiw-step">
        <img src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bc67270a57a73047295cf7_hiw-step-2.svg" loading="lazy" width="60" height="60" alt="" />
        <div class="nh-hiw-text">
          <div class="nh-step-title">Flashcards</div>
          <div class="nh-step-desc">Turn it all into a private, browsable and searchable database.</div>
        </div>
      </div>
      <div class="nh-hiw-step">
        <img src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bc67273f9cb6f9723cce5c_hiw-step-3.svg" loading="lazy" width="60" height="60" alt="" />
        <div class="nh-hiw-text">
          <div class="nh-step-title">Account</div>
          <div class="nh-step-desc">Update your details. Cancel your subscription. Delete your account.</div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}



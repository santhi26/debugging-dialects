import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterHome() {
  return (
    <div className="general wf-section">
      <div className="overview fluentcontent wf-section">
        <div className="content-wrapper-m-copy center content-section-title">
          <div className="w-richtext">
            <h2 className="pagetitle">Teacher dashboard</h2>
            <div className="pack-containers"> {/* This will hold both pack-containers side by side */}
              <div className="pack-container">
  <div className="header">
    <p className="title">
      Student
    </p>
    <div className="price-container">
      <span>$</span>1
      <span>/mo</span>
    </div>
  </div>
  <div>
    <ul className="lists">
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          Real time teacher chat
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          Choose your own teacher
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          AI-generated flashcards
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          Make your own flashcards
        </p>
      </li>
    </ul>
  </div>
  <a href="/student/register" className="cta-signbtn fluentsigncontentbtn w-button">Start learning</a>
</div>
<div className="pack-container">
  <div className="header">
    <p className="title">
      Teacher
    </p>
    <div className="price-container">
      <span>$</span>Earn
      <span></span>
    </div>
  </div>
  <div>
    <ul className="lists">
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          Work when you want
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          Pick your students
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          Get paid for each chat
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
          Daily earning deposits
        </p>
      </li>
    </ul>
  </div>
  <a href="/student/register" className="cta-signbtn fluentsigncontentbtn w-button">Get earning</a>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

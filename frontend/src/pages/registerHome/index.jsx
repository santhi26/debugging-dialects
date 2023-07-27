import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterHome() {
  return (
    <div className="general wf-section">
      <div className="overview fluentcontent wf-section">
        <div className="content-wrapper-m-copy center content-section-title">
          <div className="w-richtext">
            <h2 className="pagetitle">Sign up</h2>
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
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </span>
                      <p>
                        Real time teacher chat
                      </p>
                    </li>
                    <li className="list">
                      <span>
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </span>
                      <p>
                        Choose your own teacher
                      </p>
                    </li>
                    <li className="list">
                      <span>
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </span>
                      <p>
                        AI-generated flashcards
                      </p>
                    </li>
                    <li className="list">
                      <span>
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
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
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </span>
                      <p>
                        Work when you want
                      </p>
                    </li>
                    <li className="list">
                      <span>
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </span>
                      <p>
                        Pick your students
                      </p>
                    </li>
                    <li className="list">
                      <span>
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </span>
                      <p>
                        Get paid for each chat
                      </p>
                    </li>
                    <li className="list">
                      <span>
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
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
          <div className="pricing-faq w-container">
            <h1 className="faq-heading">FAQ</h1>
            <div className="faq-question">
              <span className="text-span"><strong>Do I have to pay now?</strong></span>
              <br />
              No. You have to pay in the first month. After that it's $1 per month for up to 50 chat messages and 20 AI-generated flashcards. You can more for another $1.
            </div>
            <div className="faq-question">
              <span className="text-span"><strong>How do I cancel or change credit cards?</strong></span>
              <br />
              You can do this from your account page at any time.
            </div>
            <div className="faq-question">
              <span className="text-span">If I sign up as a teacher how am I paid?</span>
              <br />
              You get paid $1 for every 100 messages you send. You can withdraw your earnings at any time once you hit a minimum threshold of $5.
            </div>
            <div className="faq-question">
              <span className="text-span">How do you store personal data?</span>
              <br />
              We adhere to GDPR and other data protection laws. We store your data securely and do not share it with anyone. You can request your data or delete it at any time. All passwords are encrypted.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

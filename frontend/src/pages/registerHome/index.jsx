import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterHome() {
  return (
    <div className="general wf-section">
      <div className="overview fluentcontent wf-section">
        <div className="content-wrapper-m-copy center content-section-title">
          <div className="w-richtext">
            <h2 className="pagetitle">Teacher dashboard</h2>
            <div className="register">
              <div className="student">
                <h1>Sign up as a</h1>
                <h1>Student!</h1>
                <div className="student-image"></div>
                <button className="regbtn">
                  <Link to="/student/register">Student</Link>
                </button>
              </div>
              <div className="teacher">
                <h1>Sign up as a</h1>
                <h1>Teacher!</h1>
                <div className="teacher-image"></div>
                <button className="regbtn">
                  <Link to="/teacher/register">Teacher</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import {Link} from 'react-router-dom';




export default function RegisterHome() {

return (
    <>
        <div className="nh-hero wf-section">
            <div className="nh-hero-header-wrap">
                <div className="w-layout-blockcontainer nh-hero-header w-container"></div>
                <div className="register">
            <div className="student">
                <h1>Sign up as a</h1>
                <h1>Student!</h1>
                <div className="student-image"></div>
                <button className="regbtn"><Link to="/register" >Student</Link> </button>
            </div>
            <div className="teacher">
                <h1>Sign up as a</h1>
                    <h1>Teacher!</h1>
                    <div className="teacher-image"></div>
                    <button className="regbtn"><Link to="/registerTeacher" >Teacher</Link> </button>
            </div>
        </div>
            </div>
        </div>
    </>
)
}

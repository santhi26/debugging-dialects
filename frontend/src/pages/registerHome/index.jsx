import React from 'react';
import {Link} from 'react-router-dom';




export default function HomePage() {
    return (
        <>
        <div className="register">
            <div className="student">
                <h1>Sign up as a</h1>
                <h1>Student!</h1>
                <div className="student-image"></div>
                <button class="cta">
                    <span>Hover me</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"><Link to="/register" >Student</Link> </path>
        <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
</button>
            </div>
            <div className="teacher">
                <h1>Sign up as a</h1>
                    <h1>Teacher!</h1>
                    <div className="teacher-image"></div>
                    <button className="regbtn"><Link to="/registerTeacher" >Teacher</Link> </button>
            </div>
        </div>
            
        </>
    )
};

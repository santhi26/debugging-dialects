import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
    return (
        <div className="container">
      <header className="navBar">
        <h1>Navbar</h1>
      </header>
      <div className="globeContainer">
        <div className="globe">
          <h2 className="globeText">Learn English Now</h2>
        </div>
      </div>
      <div className="bottomSection">
        <div className="studentSection">
          <h3>Student Section</h3>
        </div>
        <div className="teacherSection">
          <h3>Teacher Section</h3>
        </div>
      </div>
    </div>
    )
};

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function Greetings() {

  return (
    <footer className="nh-footer">
      <div className="nh-footer-content">
        <div className="nh-footer-section">
          <h3>Contact Us</h3>
          <p>hello@fluentpal.com</p>
        </div>
        <div className="nh-footer-section">
          <h3>Links</h3>
          <div className="nh-social-links">
            <NavLink to="/about" className="social-icon">About</NavLink>
            <NavLink to="/signup" className="social-icon">Sign up</NavLink>
            <NavLink to="/login" className="social-icon">Log in</NavLink>
          </div>
        </div>
      </div>
      <div className="nh-footer-row">
        <p className="nh-footer-rights">2023 FluentPal</p>
      </div>
    </footer>
  )
}

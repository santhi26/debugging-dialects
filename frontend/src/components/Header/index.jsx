import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts';

const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' });

export default function Header() {
  const { contextUsername, role } = useContext(UserContext);
  const userRole = localStorage.getItem("role");
  

  return (
	<>
	  {userRole === "student" ? (
		<>
    <div aria-hidden="true" tabindex="-1" data-w-id="c83a1012-8269-2847-3b1c-94bedddb1547" class="get-fluentpal-modal-bg modal-close_area"></div>
		<div hidden tabIndex="-1" className="get-fluentpal-modal-bg modal-close_area"></div>
		<section id="NH-header" className="nh-header wf-section">
		  <div className="w-layout-blockcontainer nh-header-content w-container">
			  <div className="nh-menuitems">
			  </div>
			  <NavLink to="/" aria-current="page" className="fluentpallogolink w-inline-block w--current">
				  <h1 className="nh-hero-headline">FluentPal</h1>
			  </NavLink>
			  <NavLink id="menubar-cta" to="/student/dashboard" className="nh-header-getfluentpalbtn w-inline-block">
				  <div className="nh-homebuttons">
					  <div className="getfluentpaltext">Dashboard</div>
				  </div>
			  </NavLink>
			  <NavLink id="menubar-cta" to="/message" style={styles} className="nh-header-getfluentpalbtn w-inline-block">
				  <div className="nh-homebuttons">
					  <div className="getfluentpaltext">Chat</div>
				  </div>
			  </NavLink>
			  <NavLink id="menubar-cta" to="/flashcards" style={styles} className="nh-header-getfluentpalbtn w-inline-block">
				  <div className="nh-homebuttons">
					  <div className="getfluentpaltext">Flashcards</div>
				  </div>
			  </NavLink>
		  </div>
		  </section>
		</>
		) : (
		  <>
		  {userRole === "teacher" ? (
			<>
      <div aria-hidden="true" tabindex="-1" data-w-id="c83a1012-8269-2847-3b1c-94bedddb1547" class="get-fluentpal-modal-bg modal-close_area"></div>
			<div hidden tabIndex="-1" className="get-fluentpal-modal-bg modal-close_area"></div>
			<section id="NH-header" className="nh-header wf-section">
			  <div className="w-layout-blockcontainer nh-header-content w-container">
				  <div className="nh-menuitems">
				  </div>
				  <NavLink to="/" aria-current="page" className="fluentpallogolink w-inline-block w--current">
					  <h1 className="nh-hero-headline">FluentPal</h1>
				  </NavLink>
				  <NavLink id="menubar-cta" to="/teacher/dashboard" className="nh-header-getfluentpalbtn w-inline-block">
				  <div className="nh-homebuttons">
					  <div className="getfluentpaltext">Dashboard</div>
				  </div>
			  </NavLink>
			  <NavLink id="menubar-cta" to="/message" style={styles} className="nh-header-getfluentpalbtn w-inline-block">
				  <div className="nh-homebuttons">
					  <div className="getfluentpaltext">Chat</div>
				  </div>
			  </NavLink>
			  <NavLink id="menubar-cta" to="/teacher/account" style={styles} className="nh-header-getfluentpalbtn w-inline-block">
				  <div className="nh-homebuttons">
					  <div className="getfluentpaltext">Account</div>
				  </div>
			  </NavLink>
			  </div>
			  </section>
			</>
			) : (
			<>
      <div aria-hidden="true" tabindex="-1" data-w-id="c83a1012-8269-2847-3b1c-94bedddb1547" class="get-fluentpal-modal-bg modal-close_area"></div>
			  <div hidden tabIndex="-1" className="get-fluentpal-modal-bg modal-close_area"></div>
			<section id="NH-header" className="nh-header wf-section">
			  <div className="w-layout-blockcontainer nh-header-content w-container">
				  <div className="nh-menuitems">
				  </div>
				  <NavLink to="/" aria-current="page" className="fluentpallogolink w-inline-block w--current">
					  <h1 className="nh-hero-headline">FluentPal</h1>
				  </NavLink>
				  <NavLink id="menubar-cta" to="/register" className="nh-header-getfluentpalbtn w-inline-block">
					  <div className="nh-homebuttons">
						  <div className="getfluentpaltext">Sign up</div>
					  </div>
				  </NavLink>
				  <NavLink id="menubar-cta" to="/Login" style={styles} className="nh-header-getfluentpalbtn w-inline-block">
					  <div className="nh-homebuttons">
						  <div className="getfluentpaltext">Login</div>
					  </div>
				  </NavLink>
			  </div>
			  </section>
			</>
			)}
		  </>
		)}
	</>
  );
}

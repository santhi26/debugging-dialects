import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'bold' : 'none' });

export default function Header() {
  const { contextUsername, role } = useContext(UserContext);

  return (
    <>
      {contextUsername === "" ? (
        <header>
          <nav className="nav">
            <NavLink to="/" style={styles}>FluentPal </NavLink>
            <NavLink to="/Login" style={styles} className="log">Login </NavLink>
            <NavLink to="/about" style={styles} className="about">About </NavLink>
          </nav>
        </header>
      ) : (
        <>
          {role === "teacher" ? (
            <header>
              <nav className="nav">
                <NavLink to="/" style={styles}>Home </NavLink>
                <NavLink to="/message" style={styles}>Chat </NavLink>
                <NavLink to="/teacher/profile" style={styles}>Profile </NavLink>
                <NavLink to="/about" style={styles}>About </NavLink>
              </nav>
            </header>
          ) : (
            <header>
              <nav>
                <NavLink to="/student" style={styles}>Home </NavLink>
                <NavLink to="/message" style={styles}>Chat </NavLink>
                <NavLink to="student/flashcard" style={styles}>FlashCards </NavLink>
                <NavLink to="/about" style={styles}>About </NavLink>
              </nav>
            </header>
          )}
        </>
      )}
      <Outlet />
    </>
  );
}

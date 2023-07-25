import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function HeaderUser () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/message" style={styles}>Chat</NavLink>
                    <NavLink to="/flashcard" style={styles}>Flash Cards</NavLink> 
                    <NavLink to="/about" style={styles}>About</NavLink>                        
                </nav>
            </header>
            <Outlet />
        </main>
    )
};

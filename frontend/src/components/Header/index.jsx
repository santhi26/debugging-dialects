import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/registerHome" style={styles}>Register</NavLink>
                    <NavLink to="/Login" style={styles}>Login</NavLink>   
                </nav>
            </header>
            <Outlet />
        </main>
    )
};

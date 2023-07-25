import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../contexts';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header () {
    const {contextUsername} = useContext(UserContext);
    return (
        <main>
            {contextUsername === "" ? (
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home </NavLink>
                    <NavLink to="/registerHome" style={styles}>Register </NavLink>
                    <NavLink to="/Login" style={styles}>Login </NavLink>
                    
                </nav>
            </header>
            ) : (
                <header>
                <nav>
                    <NavLink to="/" style={styles}>Home </NavLink>
                    <NavLink to="/message" style={styles}>Chat </NavLink>
                    <NavLink to="/flashcard" style={styles}>FlashCards </NavLink> 
                    <NavLink to="/about" style={styles}>About </NavLink>                        
                </nav>
            </header>
            )}
            <Outlet />

        </main>
    )
};

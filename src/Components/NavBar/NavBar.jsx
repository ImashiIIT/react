import { Link } from 'react-router-dom';
import React from "react";
import './NavBar.css';
const NavBar = () => {
    return (
        <>
            <div className='nav-bar'>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>

            
        </>
    );
};

export default NavBar;

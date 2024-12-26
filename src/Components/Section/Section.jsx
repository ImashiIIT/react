import { Link } from 'react-router-dom';
import React from "react";
import './Section.css';
const Section= () => {
    return (
        <>
        <div className='section'>
            <div className='nav-bar'>
                <div className='logo'></div>
                {/* <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" /> */}
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </div>
        </div>        
        </>
    );
};

export default Section;

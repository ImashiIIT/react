import { Link } from 'react-router-dom';
import React from "react";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
        <div className='nav-bar'>
            <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" />
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <div className='container-1'>
            
        </div>
        </>
    );
}
export default AboutUs;
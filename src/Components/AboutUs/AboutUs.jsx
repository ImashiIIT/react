import { Link } from 'react-router-dom';
import React from "react";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
        <div className='aboutUs'>
        <div className='nav-bar'>
            <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" />
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </div>
        <div className='container1'>
        <h1>“Good food is the foundation</h1>
        <h1>of genuine happiness.”</h1>
        </div>
        <div className='about-content1'>At DineFlow, we believe that great food, exceptional service, 
            and a warm ambiance create memorable experiences. Nestled in the heart of Kandy, 
            our restaurant is the perfect place to savor delicious cuisine, celebrate life’s special moments, 
            or simply unwind with friends and family.
        </div>
        
        </div>
        </>
    );
}
export default AboutUs;
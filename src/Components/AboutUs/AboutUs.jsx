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
        At <i><strong>DineFlow</strong></i>, we believe that great food, exceptional service, and a warm ambiance create memorable experiences.
        Nestled in the heart of Colombo, our restaurant is the perfect place to savor delicious cuisine, celebrate life’s special moments, 
        or simply unwind with friends and family.
        <h3>Our Story</h3>
        Founded in 2017, DineFlow was born from a passion for culinary excellence and creating community spaces where people come together to enjoy the finer things in life. 
        What started as a humble idea has grown into a favorite destination for food lovers, event hosts, and families.
        Our team of chefs and staff work tirelessly to ensure every guest enjoys top-notch meals crafted with the freshest ingredients and served with care.
        <div className='container2'></div>
        <div className='container3'></div>
        <div className='container4'></div>
        <div className='container5'></div>
        <div className='container6'></div>
        </div>
        </div>
        </>
    );
}
export default AboutUs;
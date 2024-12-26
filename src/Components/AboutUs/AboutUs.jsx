import { Link } from 'react-router-dom';
import React from "react";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
        <div className='aboutUs'>
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
        <div className='container1'>
        <h1>“Good food is the foundation</h1>
        <h1>of genuine happiness.”</h1>
        </div>
        <div className='about-content1'>At DineFlow, we believe that great food, exceptional service, 
            and a warm ambiance create memorable experiences. Nestled in the heart of Kandy, 
            our restaurant is the perfect place to savor delicious cuisine, celebrate life’s special moments, 
            or simply unwind with friends and family.
        </div>
        <div className='about-content2'></div>
        <div className='about-content3'>
        <h2>Our Story</h2>
        <p>Founded in 2017, DineFlow was born from a passion for culinary excellence and creating community 
        spaces where people come together to enjoy the finer things in life. 
        What started as a humble idea has grown into a favorite destination for food lovers, event hosts, and families.
        Our team of chefs and staff work tirelessly to ensure every guest enjoys top-notch meals crafted with the freshest ingredients and served with care.</p>
        </div>
        <div className='about-content4'></div>
        <div className='about-content5'>
        <h2>Why Choose Us?</h2>
        
            <ul><strong>Exceptional Cuisine:</strong></ul>
            <p>Our carefully curated menu offers a variety of dishes, from timeless classics to modern innovations. 
            Every plate reflects our dedication to quality and flavor.</p>
        
            <ul><strong>Easy Reservations:</strong></ul>
            <p>Whether it’s a romantic dinner for two or a gathering with friends, our online reservation system makes it simple to secure your table. 
            Plan ahead to enjoy your visit without the wait.</p>
        
            <ul><strong>Event Planning Made Easy:</strong></ul>
            <p>Looking to host a birthday, anniversary, or corporate event? DineFlow offers comprehensive event planning services. 
            From customized menus to elegant setups, we ensure your event is as stress-free as it is memorable.</p> 
        </div>
        <div className='about-content6'>
        <h2>Our Spaces</h2>
        <p><strong>* Dining Room: </strong>A cozy, welcoming space perfect for a casual meal or formal celebration.</p>A cozy, welcoming space perfect for a casual meal or formal celebration.
        <p><strong>* Private Event Rooms:</strong>Intimate spaces for special occasions, equipped with everything you need for a flawless event.</p> 
        <p><strong>* Outdoor Patio:</strong>Enjoy dining under the stars with our open-air seating options</p> 
        </div>
        </div>
        </>
    );
}
export default AboutUs;
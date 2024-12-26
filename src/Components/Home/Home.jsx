import { Link } from 'react-router-dom';
import React from "react";
import './Home.css';
const Home = () => {
    return (
        <>
        <div className='home'>
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

            <div className="content1">
                <div className="line"></div>
                <h1 className="title animated-title"><i>Welcome to DineFlow</i></h1>
                <div className="line"></div>
                <p>where your perfect table awaits!</p>
                <p>Explore our easy-to-use reservation system</p>
                <p>and book your next dining experience with just a few clicks.</p>
            </div>

            <div className='content2'>
                <div className='booking-item'>
                    <img src="C:\Users\WAC\Desktop\Project\imashi\public\images\booking-icon.png" alt="Booking" className="icon" />
                    <p><a href='/booking'>Booking</a></p>
                </div>
                <div className='event-item'>
                    <img src="./path_to_event_icon.png" alt="Event" className="icon" />
                    <p><a href="/event">Event</a></p>
                </div>
                <div className='section-item'>
                    <img src="./path_to_section_icon.png" alt="Section" className="icon" />
                    <p><a href="/section">Sections</a></p>
                </div>
                <div className='menu-item'>
                    <img src="./path_to_menu_icon.png" alt="Menu" className="icon" />
                    <p><a href="/menu">Menu</a></p>
                </div>
            </div>
            <div className='container'>
                <div className='content-row'>
                <div className="content3">
                    <div className="booking-header">
                        <h3>Booking:</h3>
                        <p>
                            Welcome to DineFlow, your gateway to seamless and convenient bookings! Whether you're planning a business meeting, a family dinner, or a special event, 
                            our easy-to-use platform makes reserving the perfect space effortless. With just a few clicks, you can check availability, select your preferred time, and confirm your booking—whenever and wherever you need.
                            Let us handle the details, so you can focus on making memories. Start booking today and experience the simplicity of DineFlow.
                        </p>
                    </div>
                </div>
                <div className="content4">
                    <div className="booking-header">
                        <h3>Events:</h3>
                        <p>
                            At DineFlow, we’re here to help you host unforgettable events with ease! Whether it’s a birthday celebration, a corporate gathering, or a romantic anniversary, our platform connects you with the perfect venues tailored to your needs. 
                            With options for personalized decorations, custom menus, and exceptional service, your special moments are in great hands. Explore a wide range of event spaces, check real-time availability, and book your event hassle-free.
                            From intimate gatherings to grand occasions, let DineFlow make your event planning stress-free and seamless.
                        </p>
                    </div>
                </div>
                </div>
                <div className="content5">
                    <div className="booking-header">
                        <h3>Sections:</h3>
                        <p>
                            Discover the perfect setting for your dining or event needs with DineFlow’s dedicated sections. Whether you’re looking for a cozy private room for an intimate dinner, a vibrant outdoor seating area, or a spacious hall for a celebration, we’ve got you covered.
                            Browse through a variety of section options tailored to match your preferences and group size. Our platform makes it easy to choose the ideal section, ensuring comfort, privacy, and a memorable atmosphere.
                            Create lasting memories in a space designed just for you—explore and book your perfect section today with DineFlow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;

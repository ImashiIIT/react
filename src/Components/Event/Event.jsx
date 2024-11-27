import { Link } from 'react-router-dom';
import React from "react";
import './Event.css';
const Event = () => {
    return (
        <>
        <div className='nav-bar'>
        <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" />

                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        <div className="event-container">
            <div>
                <h1>Welcome to the Event Page</h1>
                <p>
                    Plan and organize your events effortlessly with DineFlow. From small gatherings to large celebrations, 
                    we provide the perfect spaces and services to make your events memorable.
                </p>
            </div>
        </div>
        </>
    );
};

export default Event;

import { Link } from 'react-router-dom';
import React from "react";
import './Booking.css';

const Booking = () => {
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
            <div className='form'>
                <form className=''>
                <div className='input-field'>
                    <label>Select The Floor</label>
                    <input type="text"placeholder="select the floor" required/>
                </div>
                <div className='input-field'>
                    <label>Select Table No</label>
                    <input type="number"placeholder="select table number" required/>
                </div>
                <div className='input-field'>
                    <label>Select Time</label>
                    <input type="time"placeholder="select time" required/>
                </div>
                <div className='input-field'>
                    <label>Number of People</label>
                    <input type="number"placeholder="Enter number of people" value={10} required/>
                </div>
                <a href="/Home"><button type="submit">Confirm</button></a>
                </form>
            </div>
        </>
    );

};

export default Booking;

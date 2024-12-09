import { Link } from 'react-router-dom';
import React from "react";
import './Contact.css';
const Contact = () => {
    return (
        <>
        <div className='contact-page'>
        <div className='nav-bar'>
            <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" />
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <div className='contact'>
            <h2>Contact Us</h2>
            <p>"Feel free to reach out to us with any questions, feedback, or inquiries – we're here to help make your dining experience exceptional!"</p>
        </div>
        <div className='contact-no'>
            <p><b>Tel No   :</b>011111111</p>
        </div>
        <div className='address'>
            <p><b>Location :</b>No 33, Narahenpita, Nawala</p>
        </div>
        <div className='email'>
            <p><b>Email :</b>dineflow@gmail.com</p>
        </div>
        
        <div className='msg-form'>
            <form className=''>
                <h1>Send Message</h1>
            <div className="input-box">
                <label>Name</label>
                <input type="text"placeholder="Enter full name" required/>
            </div>
            <div className="input-box">
                <label>Email</label>
                <input type="email" placeholder="Enter email" required/>
            </div>
            <div className='input-box'>
                <label>Message</label>
                <input type='text' placeholder='Enter message' required/>
            </div>
            <a href="/Home"><button type="submit">Send</button></a>
            </form>
        </div>
        </div>
        </>
    );
}
export default Contact;
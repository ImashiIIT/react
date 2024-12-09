import { Link } from 'react-router-dom';
import React from "react";
import './RegisterForm.css';
import {FaLock, FaUser} from "react-icons/fa";
const RegisterForm = () =>{
    return(
        <div className='login-page'>
        <div className="wrapper">
            <form className="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text"placeholder="First Name" required/>
                    <FaUser className="icon"/>                
                </div>
                <div className="input-box">
                    <input type="text"placeholder="Last Name" required/>
                    <FaUser className="icon"/>                
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder=" Confirm Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password</a>
                </div>

                <Link to="/home">
                    <button type="button">Login</button>
                </Link>
            </form>
        </div>
        </div>
    )
}

export default RegisterForm
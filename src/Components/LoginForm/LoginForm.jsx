import { Link } from 'react-router-dom';
import React from "react";
import './LoginForm.css';
import {FaLock, FaUser} from "react-icons/fa";
const LoginForm = () =>{
    return(
        <div className="wrapper">
            <form className="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text"placeholder="Username" required/>
                    <FaUser className="icon"/>                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password</a>
                </div>

                <a href="/Home"><button type="submit">Login</button></a>

                <div className="register-link">
                    <p>Don't have an account?</p><Link to="/register">
                Register
            </Link>
                </div>
                
            </form>
        </div>
    )
}

export default LoginForm
import React from "react";
import "../components/home/Home.css";
import { NavLink as Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div class="container">
                <div class="title">Register</div>
                <form action="profile.html">
                    <div class="input-group">
                        <div class="input-field">
                            <span class="input-label">Username</span>
                            <input type="text" placeholder="Enter your username" required />
                        </div>
                        <div class="input-field">
                            <span class="input-label">Password</span>
                            <input type="password" placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div class="submit-button-wrapper">
                        <Link to="/">
                            <input type="submit" class="submit-button" value="Register" />
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
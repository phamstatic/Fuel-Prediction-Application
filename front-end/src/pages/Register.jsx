import React from "react";
import "../stylesheets/Home.css";
import { NavLink as Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";


const Register = () => {
    return (
        <>
            <NavigationBar/>
            <div className="container">
                <div className="title">Register</div>
                <form action="profile.html">
                    <div className="input-group">
                        <div className="input-field">
                            <span className="input-label">Username</span>
                            <input type="text" placeholder="Enter your username" required />
                        </div>
                        <div className="input-field">
                            <span className="input-label">Password</span>
                            <input type="password" placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div className="submit-button-wrapper">
                        <Link to="/">
                            <input type="submit" className="submit-button" value="Register" />
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
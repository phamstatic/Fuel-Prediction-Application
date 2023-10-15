import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../stylesheets/Welcome.css";
import NavigationBar from "../components/NavigationBar";

const Welcome = () => {
    return (
        <>
            <NavigationBar/>
            
            <div className="container">
                <h2>Welcome</h2>
                <div className="button">
                    <Link to="/Login">
                        <a><input value="Login"/></a>
                    </Link>
                </div>
                <div className="button">
                    <Link to="/Register">
                        <a><input value="Register"/></a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Welcome;
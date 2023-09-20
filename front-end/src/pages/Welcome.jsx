import React from "react";
import "../stylesheets/Welcome.css";
import { NavLink as Link } from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <div class="container">
                <h2>Welcome</h2>
                <div class="button">
                    <Link to="/Login">
                        <a><input value="Login"/></a>
                    </Link>
                </div>
                <div class="button">
                    <Link to="/Register">
                        <a><input value="Register"/></a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Welcome;
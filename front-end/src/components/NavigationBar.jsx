import React from "react";
import "../stylesheets/Navigation.css";
import { NavLink as Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <div class = "navigationBar">
                <img className="logo" src="https://uh.edu/brand/_img/uh_white_black.png"/>
            </div>
        </>
    );
}

export default NavigationBar;
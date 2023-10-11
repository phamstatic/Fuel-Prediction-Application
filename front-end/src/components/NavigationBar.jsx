import React from "react";
import "../stylesheets/Navigation.css";

const NavigationBar = () => {
    return (
        <>
            <div className = "navigationBar">
                <img className="logo" src="https://uh.edu/brand/_img/uh_white_black.png" alt="UH Logo"/>
                <div className="apptitle">Fuel Prediction Application</div>
            </div>
        </>
    );
}

export default NavigationBar;
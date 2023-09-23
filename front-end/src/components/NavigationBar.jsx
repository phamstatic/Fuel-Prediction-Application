import React from "react";
import "../stylesheets/Navigation.css";

const NavigationBar = () => {
    return (
        <>
            <div class = "navigationBar">
                <img className="logo" src="https://uh.edu/brand/_img/uh_white_black.png" alt="UH Logo"/>
                <div class="apptitle">Fuel Prediction Application</div>
            </div>
        </>
    );
}

export default NavigationBar;
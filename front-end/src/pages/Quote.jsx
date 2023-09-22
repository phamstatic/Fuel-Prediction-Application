import React from "react";
import "../stylesheets/Home.css";
import NavigationBar from "../components/NavigationBar";

const Quote = () => {
    return (
        <>
            <NavigationBar/>
            <div class="container">
                <input type = "number" name = "gallons" id ="gallons" placeholder ="Gallons Requested"/>
            </div>
        </>
    );
}

export default Quote;
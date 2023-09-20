import React from "react";
import "./Welcome.css";

const Welcome = () => {
    return (
        <>
            <div class="container">
                <h2>Welcome</h2>
                <div class="button">
                    <a href="login.html"><input value="Login" /></a>
                </div>
                <div class="button">
                    <a href="register.html"><input value="Register" /></a>
                </div>
            </div>
        </>
    );
}

export default Welcome;
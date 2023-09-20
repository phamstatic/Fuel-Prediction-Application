import React from "react";
import "../components/home/Home.css";

const Login = () => {
    return (
        <>
            <div class="container">
                <div class="title">Login</div>
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
                        <input type="submit" class="submit-button" value="Login" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
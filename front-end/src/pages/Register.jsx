import React from "react";
import "../stylesheets/Home.css";
import { useHistory } from "react-router-dom"; 
import NavigationBar from "../components/NavigationBar";
import { register } from "../back-end/login.js";


const Register = () => {
    const history = useHistory();
    const handleRegister = (username, password) => {
        if (register(username, password)) {
            history.push("/Login");
        }
    };

    return (
        <>
            <NavigationBar/>
            <div classNameName="container">
                <div classNameName="title">Register</div>
                <form>
                    <div classNameName="input-group">
                        <div classNameName="input-field">
                            <span classNameName="input-label">Username</span>
                            <input type="text" placeholder="Enter your username" id="username" required />
                        </div>
                        <div classNameName="input-field">
                            <span classNameName="input-label">Password</span>
                            <input type="password" placeholder="Enter your password" id="password" required />
                        </div>
                    </div>
                    <div classNameName="submit-button-wrapper">
                        <button type="button" onClick={() => handleRegister(document.getElementById('username').value, document.getElementById('password').value)}>Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
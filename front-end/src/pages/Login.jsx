import React from "react";
import "../stylesheets/Home.css";
import { useHistory } from "react-router-dom"; 
import NavigationBar from "../components/NavigationBar";
import { login, firstTimeLogin } from "../back-end/login.js";

const Login = () => {
    const history = useHistory();
    const handleLogin = (username, password) => {
        if (login(username, password)) { 
            if (firstTimeLogin[username]) {
                history.push("/Profile");
            } else {
                history.push("/Quote");
            }
        }
    };

    return (
        <>            
            <NavigationBar/>
            <div class="container">
                <div class="title">Login</div>
                <form>
                    <div class="input-group">
                        <div class="input-field">
                            <span class="input-label">Username</span>
                            <input type="text" placeholder="Enter your username" id="username" required />
                        </div>
                        <div class="input-field">
                            <span class="input-label">Password</span>
                            <input type="password" placeholder="Enter your password" id="password" required />
                        </div>
                    </div>
                    <div class="submit-button-wrapper">
                        <button type="button" onClick={() => handleLogin(document.getElementById('username').value, document.getElementById('password').value)}>Login</button>
                     </div>
                </form>
            </div>
        </>
    );
}

export default Login;
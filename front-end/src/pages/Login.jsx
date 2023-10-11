import React from "react";
import "../stylesheets/Home.css";
import { NavLink as Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import axios from "axios";
const Login = () => {
    const port = 8000;

    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post(`http://localhost:${port}/api/login`, formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return (
        <>            
            <NavigationBar/>
            <div class="container">
                <div class="title">Login</div>
                <form id="login" onSubmit={handleSubmit}> 
                    <div class="input-group">
                        <div class="input-field">
                            <span class="input-label">Username</span>
                            <input type="text" placeholder="Enter your username" onChange={handleChange} required />
                        </div>
                        <div class="input-field">
                            <span class="input-label">Password</span>
                            <input type="password" placeholder="Enter your password" onChange={handleChange} required />
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
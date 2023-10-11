import React from "react";
import "../stylesheets/Home.css";
import { NavLink as Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import axios from "axios";
const Login = () => {
    
    const port = 8000;
    const [formData, setFormData] = useState();
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  
    const loginForm = (event) => {
      event.preventDefault();
  
      axios.post(`http://localhost:${port}/Login`, formData)
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
            <div className="container">
                <div className="title">Login</div>
                <form id="login" onSubmit={loginForm}> 
                    <div className="input-group">
                        <div className="input-field">
                            <span className="input-label">Username</span>
                            <input id="username" name="username" type="text" placeholder="Enter your username" onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <span className="input-label">Password</span>
                            <input id="password" name="password" type="password" placeholder="Enter your password" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="submit-button-wrapper">
                        <input type="submit" className="submit-button" value="Login" />
                     </div>
                </form>
            </div>
        </>
    );
}

export default Login;
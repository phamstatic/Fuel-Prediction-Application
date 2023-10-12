import React from "react";
import "../stylesheets/Home.css";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import axios from "axios";

const Register = () => {

    const port = 8000;
    const [formData, setFormData] = useState();
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  
    const RegisterForm = (event) => {
      event.preventDefault();
      axios.post(`http://localhost:${port}/Register`, formData)
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
                <div className="title">Register</div>
                <form id="register" onSubmit={RegisterForm}>
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
                        <input type="submit" className="submit-button" value="Register" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
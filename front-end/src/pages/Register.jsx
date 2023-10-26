import React, { useState } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import "../stylesheets/Home.css";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";

const Register = () => {

    const port = 8000;
    const [formData, setFormData] = useState();
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const navigate = useNavigate();

    const RegisterForm = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:${port}/Register`, formData)
            .then((response) => {
                console.log(response.data.message);
                alert(response.data.message);
                if (response.data.success == true) {
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <NavigationBar />
            <div className="container">
                <Link to="/" className="back">Back</Link>
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
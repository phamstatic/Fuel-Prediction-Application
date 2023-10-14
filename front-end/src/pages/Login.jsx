import React from "react";
import "../stylesheets/Home.css";
import NavigationBar from "../components/NavigationBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

const Login = () => {
    
    const port = 8000;
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

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
          console.log(response.data.message);
          if (response.data.firstLogin) {
            navigate("/Quote",{state:{id:formData.username}})
          } else {
            navigate("/Profile",{state:{id:formData.username}})
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        }); 
        userAuthentication();
    }
    async function userAuthentication() {
      try {
          const response = await axios.get(`http://localhost:${port}/Login`);
          console.log(response.data);
      }
      catch (error) {
          console.log(error);
      }
  } 
    return (
        <>            
            <NavigationBar/>
            <div className="container">
                <Link to="/" className="back">Back</Link>
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
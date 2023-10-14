import React, { useContext } from "react";
import "../stylesheets/Home.css";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

const Profile = () => {
        
    const port = 8000;
    const [formData, setFormData] = useState();
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  
    const navigate = useNavigate();

    const ProfileForm = (event) => {
      event.preventDefault();
      
        if (formData.fullName.length > 50) {
          alert("Full Name should be less than 50 characters!");
        }
        else if (formData.address1.length > 100) {
          alert("Address 1 should be less than 100 characters!");
        }
        else if (formData.address2.length > 100) {
            alert("Address 2 should be less than 100 characters!");
        }
        else if (formData.city.length > 100) {
            alert("City should be less than 100 characters!");
        }
        else if (formData.state.length > 2) {
            alert("State should be less than 2 characters!");
        }
        else if (formData.zip.length < 4 || formData.zip.length > 9) {
            alert("Zipcode should be between 5 to 9 digits ");
        }

        else {
          alert("Validated!");
          axios.post(`http://localhost:${port}/Profile`, formData)
            .then((response) => {
              console.log(response.data.message);
              navigate("/Quote")
            })
            .catch((error) => {
              console.error(error);
            }); 
        }
  
    }


    return (
        <>
            <NavigationBar/>
            <div className="container">
                <div className="title">Profile</div>
                <form id="profile" onSubmit={ProfileForm}> 
                    <div className="input-group">
                        <div className="input-field">
                            <span className="input-label">Full Name</span>
                            <input id= "fullName" name = "fullName" type="text" placeholder="Enter your full name" maxlength="50" onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <span className="input-label"></span>
                        </div>
                        <div className="input-field">
                            <span className="input-label">Address 1</span>
                            <input id = "address1" name = "address1" type="text" placeholder="Enter your address" maxlength="100" onChange={handleChange} required  />
                        </div>
                        <div className="input-field">
                            <span className="input-label">Address 2</span>
                            <input id ="address2" name = "address2" type="text" placeholder="Enter your address" maxlength="100" onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <span className="input-label">City</span>
                            <input id = "city" name = "city" type="text" placeholder="Enter your city" maxlength="100" onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <span className="input-label">State</span>
                            <select id = "state" name = "state" className="dropdown" onChange={handleChange} required>
                                <option value="" disabled selected>Select a state</option>
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <span className="input-label">Zip Code</span>
                            <input id = "zip" name = "zip" type="text" placeholder="Enter your zipcode" minlength="5" maxlength="9" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="submit-button-wrapper">
                        <input type="submit" className="submit-button" value="Continue" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;
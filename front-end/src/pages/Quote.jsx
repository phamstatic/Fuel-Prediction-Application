import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Quote.css";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";


const Quote = () => {

    const port = 8000;
    const [formData, setFormData] = useState();
    const navigate = useNavigate();
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }

    const QuoteForm = (event) => {
      event.preventDefault();
      if (formData.gallonsRequested.isInteger == false) {
        alert("Gallons requested is not an integer!");
      }
      else if (formData.deliveryDate.length > 100) {
        alert("deliveryDate should be less than 100 characters!");
      }

      else {
        alert("Validated!");
        axios.post(`http://localhost:${port}/Profile/Quote`, formData)
          .then((response) => {
            console.log(response.data.message);
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
                <div className="title">Quote</div>
                <form id = "FuelQuoteModule" onSubmit = {QuoteForm}>
                <div className="input-group">
                        <div className="input-field">
                            <span className="input-label">Gallons</span>
                            <input id= "gallonsRequested" name = "gallonsRequested" type="number" placeholder="Gallons Requested" onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <span className="input-label"></span>
                        </div>
                        <div className="input-field">
                            <span className="input-label">Profit Margin</span>
                            <input id = "profitMargin" name = "profitMargin" type="number" placeholder="Enter your profit margin" maxlength="100" onChange={handleChange} required  />
                        </div>
                        <div className="input-field">
                            <span className="input-label">Delivery Address</span>
                            <input id = "deliveryAddress" name = "deliveryAddress" type="text" placeholder="Enter your delivery address" maxlength="100" onChange={handleChange} required  />
                        </div>
                        <div className="input-field">
                            <span className="input-label">Delivery Date</span>
                            <input id = "deliveryDate" name = "deliveryDate" type="date" onChange={handleChange} required  />
                        </div>
                    </div>
                    <input type = "submit" value = "Submit"/>
                </form>
                

            </div>
        </>
    );
}



export default Quote;
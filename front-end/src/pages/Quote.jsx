import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../stylesheets/Quote.css";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";


const Quote = () => {

    const location = useLocation();
    const port = 8000;
    const [formData, setFormData] = useState({
      username: location.state.id,
    });
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
            navigate("/Profile/History")
          })
          .catch((error) => {
            console.error(error);
          }); 
      }
    }

    function calculateQuote() {
      let userGallonsRequested = document.getElementById("gallonsRequested");
      let userDeliveryAddress = document.getElementById("deliveryAddress");
      if (userGallonsRequested.value.length < 1 ||  userDeliveryAddress.value.length < 1) {
        alert("Finish filling the fields!");
      }
      else {
        alert(`Gallons Requested: ${userGallonsRequested.value}, Delivery Address: ${userDeliveryAddress.value}`);
    
        let outputSuggestedPrice = document.getElementById("suggestedPrice");
        outputSuggestedPrice.innerHTML = `${(1.50 + 5).toFixed(2)}`;

        let totalCalculatedPrice = document.getElementById("totalPrice");
        totalCalculatedPrice.innerHTML = `${(250 + 5).toFixed(2)}`;
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
                            <span className="input-label">Delivery Address</span>
                            <input id = "deliveryAddress" name = "deliveryAddress" type="text" placeholder="Enter your delivery address" maxlength="100" onChange={handleChange} required  />
                        </div>
                        <div className="input-field">
                            <span className="input-label">Delivery Date</span>
                            <input id = "deliveryDate" name = "deliveryDate" type="date" onChange={handleChange} required  />
                        </div>
                    </div>
                    <div className="output-group">
                      <div className="output-field">
                        <span className="output-label">Suggested Price</span>
                        <output>$<span id = "suggestedPrice">000.00</span></output>
                      </div>
                      <div className="output-field">
                        <span className="output-label">Total Price</span>
                        <output>$<span id = "totalPrice">000.00</span></output>
                      </div>
                    </div>

                    <input id="getQuote" type = "button" value = "Get Quote" onClick={calculateQuote}/>
                    <input id="submitQuote" type = "submit" value = "Submit"/>

                </form>
                

            </div>
        </>
    );
}



export default Quote;
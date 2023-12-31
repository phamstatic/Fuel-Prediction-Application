import React, { useState, useEffect } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import "../stylesheets/History.css";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";

const History = () => {
    const port = 8000;
    const [orders, setOrders] = useState([]);
    const formatter = new Intl.NumberFormat('en-US');
    //const [formData, setFormData] = useState();

    useEffect(() => {
    axios.get(`http://localhost:${port}/History`) // ')//
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


    return (
        <>
            <NavigationBar/>
            <div className="container">
                <Link to={-1} className="back">Back</Link>

                <div className="tableFixHead">
                    <table>
                        <caption>Fuel Quote History</caption>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Fuel Amount (G)</th>
                                <th>Suggested Price</th>
                                <th>Total Cost ($)</th>
                                <th>Address</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.delivDate}>
                                    <td>{order.username}</td>
                                    <td>{order.requested} G</td>
                                    <td>{order.suggPrice}</td>
                                    <td>${formatter.format(order.totalCost)}</td>
                                    <td>{order.delivAddress}</td>
                                    <td>{order.delivDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br/>
                {/*
                
                //REMOVED PRICE MARGIN FOR THE TIME BEING AND ID
                
                <section id="Search">
                    <form id = "history" onSubmit = {historySort}>
                        <p id="subtitle">Search</p>
                        <p>
                        <label for = "gallonCheck">Search by Gallons: </label>
                        <input type = "checkbox" name = "gallonCheck" id ="gallonCheck"/> <br/>
                        <label for = "gallonMin">Between  </label>
                        <input type = "number" name = "gallonMin" id = "gallonMin" placeholder ="Minimum Ammount"/>
                        <label for = "gallonMax"> and </label>
                        <input type = "number" name = "gallonMax" id = "gallonMax" placeholder ="Maximum Ammount"/><br/>
                        </p>

                        <p>
                        <label for = "dateCheck">Search by Date: </label>
                        <input type = "checkbox" name = "dateCheck" id ="dateCheck"/> <br/>
                        <label for = "dateMin">Between  </label>
                        <input type = "date" name = "dateMin" id = "dateMin"/>
                        <label for = "gallonMax"> and </label>
                        <input type = "date" name = "dateMax" id = "dateMax"/><br/>
                        </p>

                        <p>
                        <label for = "addressCheck">Search by Address: </label>
                        <input type = "checkbox" name = "addressCheck" id ="addressCheck"/> <br/>
                        <label for = "address">Address: </label>
                        <input type = "text" name = "address" id = "address" placeholder="Address"/>
                        </p>

                        <br/><input type = "submit" value = "Submit"/>
                    </form>
                </section>*/}
            </div>
        </>
    );
}

export default History;
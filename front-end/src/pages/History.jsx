import React from "react";
import "../stylesheets/Quote.css";
import NavigationBar from "../components/NavigationBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

const History = () => {
    const port = 8000;
    const [orders, setOrders] = useState([]);

    async function getHistory() {
        try {
            const response = await axios.get(`http://localhost:${port}/History`);
            console.log(response);
            setOrders(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
            <NavigationBar/>
            <div className="container">
                
                <table>
                        <caption>Fuel Quote History</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fuel Amount (G)</th>
                            <th>Profit Margin (%)</th>
                            <th>Total Cost ($)</th>
                            <th>Address</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            console.log(order.id),
                            <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br/>
                <section id="Search">
                <form action = "history.jsx" method = "POST">
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
                </section>
            </div>
        </>
    );
}

export default History;
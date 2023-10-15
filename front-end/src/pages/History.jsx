import React, { useState, useEffect } from "react";
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

  /*
  const historySort = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:${port}/History`, formData)
      .then((response) => {
        console.log("PING");
        if (response.data.firstLogin) {
          //navigate("/Profile",{state:{id:formData.username}})
        } else {
          //navigate("/Quote",{state:{id:formData.username}})
        }
      })
      .catch((error) => {
        console.error(error);
      }); 
      //userAuthentication();
      console.log("");
  }
    */

    return (
        <>
            <NavigationBar/>
            <div className="container">
                <div className="tableFixHead">
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
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.fuelAmount} G</td>
                                    <td>{Number((order.profitMargin * 100).toFixed(2))}%</td>
                                    <td>${formatter.format(order.totalCost)}</td>
                                    <td>{order.address}</td>
                                    <td>{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br/>
                {/*<section id="Search">
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
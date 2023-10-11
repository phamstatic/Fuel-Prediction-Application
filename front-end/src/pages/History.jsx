import React from "react";
import "../stylesheets/Quote.css";
import NavigationBar from "../components/NavigationBar";

const History = () => {
    return (
        <>
        
            <NavigationBar/>
            <div class="container">
                {/*<div class="title">Fuel Quote History</div>*/}
                
                <table>
                        <caption>Fuel Quote History</caption>
                    <tr>
                        <th>#</th>
                        <th>Fuel Amount (G)</th>
                        <th>Profit Margin (%)</th>
                        <th>Address</th>
                        <th>Date</th>
                    </tr>
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
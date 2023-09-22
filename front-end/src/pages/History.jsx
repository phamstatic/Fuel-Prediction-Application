import React from "react";
import "../stylesheets/Home.css";
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
            </div>
        </>
    );
}

export default History;
import React from "react";
import "../stylesheets/Quote.css";
import NavigationBar from "../components/NavigationBar";

const Quote = () => {
    return (
        <>
            <NavigationBar/>
            <div class="container">
                <div class="title">Fuel Quote</div>

                <form action = " " method = "POST">
                    <p><label for = "gallons">Enter Amount of Gallons Requested: </label>
                    <input type = "number" name = "gallons" id ="gallons" placeholder ="Gallons Requested"/>
                    </p>
                    <p> <label for = "profitMargin">Enter Company Profit Margin: </label>
                    <input type = "number" name = "profitMargin" id = "profitMargin" placeholder ="Profit Margin"></input>
                    </p>
                    <p>Delivery Address: <span id="address">32 P Sherman Wallaby Way, Sydney, Australia</span>{/* address comes from profile info */}<br/>
                    <label for = "deliveryDate">Select date of delivery: </label>
                    <input type = "date" name = "deliveryDate" id = "deliveryDate"></input>
                    </p>
                    <p id = "SuggPrice">Suggested Price: <span id = "suggPriceValue"></span></p>
                    <input type = "submit" value = "Submit"/>
                </form>

                <p id = "ActPrice">Total amount due: <span id = "Actual_Price"></span></p>
                {/* Script BELOW MIGHT NOT but it would just update the prices */}
                {/*<script>*/}
                    {/*Script for the prices will be left mostly blank since no function*/}
                    
                    {/* SuggPrice =0;
                    ActualPrice = 0;

                    function SuggPriceCalc({}){
                        document.getElementById("suggPriceValue").textContent = SuggPrice
                    }
                    

                    function ActPriceCalc({}){
                        document.getElementById("Actual_Price").textContent = ActualPrice
                    }
                    

                    ActPriceCalc();
                    SuggPriceCalc();*/}
                {/*</script>*/} 
            </div>
        </>
    );
}



export default Quote;
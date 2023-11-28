var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

class FuelQuoteModule {
    constructor(username, gallonsRequested, deliveryAddress, deliveryDate, state) {
        this.username = username;
        this.gallonsRequested = gallonsRequested;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDate = deliveryDate;
        this.suggestedPrice = 0;
        this.state  = state;
    }
    createQuote() {
        let gallonFactor = .02;
        
        if(this.gallonsRequested > 1000){
            gallonFactor = .03;
        }

        let locationFactor = 0.2;
        if(this.state != "TX"){
            locationFactor = 0.4;
        }
        
        this.suggestedPrice = this.gallonsRequested * (1.50 * (1.1  + gallonFactor/* + rate history factor*/ + locationFactor))
        return this.suggestedPrice;
    }
}

router.get('/', async (req, res) => {
    res.send('GET HANDLER for /PROFILE/QUOTE route');
})

router.post('/', async (req, res) => {
    let user = req.body;
    const quote = new FuelQuoteModule(user.username, user.gallonsRequested, user.deliveryAddress, user.deliveryDate, user.state);
    let sugg = quote.createQuote();

    let sql =
    `
    INSERT INTO fuelquote(username, requested, delivAddress, delivDate, suggPrice)
    VALUES('${user.username}', '${user.gallonsRequested}','${user.deliveryAddress}','${user.deliveryDate}','${sugg}');
    `;
    try {
        connection.query(sql, (err, result) => {
            res.status(200).send({
                message: `Fuel quote information successfully quoted! Suggested Price: ${sugg}`
            });
        });
    }
    catch (error) {
    }
});

module.exports = router;

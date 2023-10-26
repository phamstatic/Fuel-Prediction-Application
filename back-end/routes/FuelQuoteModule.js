var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

class FuelQuoteModule {
    constructor(gallonsRequested, deliveryAddress, deliveryDate) {
        this.gallonsRequested = gallonsRequested;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDate = deliveryDate;
        this.suggestedPrice = 0; 
    }
    createQuote() {
        this.suggestedPrice = 0;
        return this.suggestedPrice;
    }
}

router.get('/', async(req, res) => {
    res.status(200).send(quote.createQuote);
    res.send(users)
})

router.post('/', async (req, res) => { 
    let user = req.body;
    console.log(user);
    const quote = new FuelQuoteModule(user.gallonsRequested, user.deliveryAddress, user.deliveryDate);
    quote.createQuote();

    let sql = 
    `
    INSERT INTO fuelquote(requested, delivAddress,delivDate,suggPrice)
    VALUES( '${user.requested}','${user.delivAddress}','${user.delivDate}','${quote.createQuote}');
    `;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        });
    
});

module.exports = router;
module.exports = FuelQuoteModule;
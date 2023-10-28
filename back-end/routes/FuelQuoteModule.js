var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

class FuelQuoteModule {
    constructor(username, gallonsRequested, deliveryAddress, deliveryDate) {
        this.username = username;
        this.gallonsRequested = gallonsRequested;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDate = deliveryDate;
        this.suggestedPrice = 0;
    }
    createQuote() {
        this.suggestedPrice = 0.00;
        return this.suggestedPrice;
    }
}

router.get('/', async (req, res) => {
    res.send('GET HANDLER for /PROFILE/QUOTE route');
})

router.post('/', async (req, res) => {
    let user = req.body;
    const quote = new FuelQuoteModule(user.username, user.gallonsRequested, user.deliveryAddress, user.deliveryDate);
    let sugg = quote.createQuote();

    let sql =
    `
    INSERT INTO fuelquote(username, requested, delivAddress, delivDate, suggPrice)
    VALUES('${user.username}', '${user.gallonsRequested}','${user.deliveryAddress}','${user.deliveryDate}','${sugg}');
    `;
    try {
        connection.query(sql, (err, result) => {
            res.status(200).send({
                message: "Fuel quote information successfully quoted!"
            });
        });
    }
    catch (error) {
    }
});

module.exports = router;

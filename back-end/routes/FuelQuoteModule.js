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
        this.gallonFactor = .02;
        this.historyFactor = 0;
        this.locationFactor = .02;
    }
    createQuote(history) {
        if(this.gallonsRequested > 1000){
            this.gallonFactor = .03;
        }
        if(history > 0){
            this.historyFactor = .01;
        }

        if(this.state != "TX"){
            this.locationFactor = .04;
        }
        this.suggestedPrice = 1.5 + (1.50 * (.01  + this.gallonFactor - this.historyFactor + this.locationFactor))
        return this.suggestedPrice;
    }
}

router.get('/', async (req, res) => {
    res.send('GET HANDLER for /PROFILE/QUOTE route');
})

router.post('/Suggest', async (req, res) => {
    let user = req.body;
    const quote = new FuelQuoteModule(user.username, user.gallonsRequested, user.deliveryAddress, user.deliveryDate, user.state);
    let sugg = 0;
    var history = 0;
    sugg = quote.createQuote(history);
    totalCost = sugg * user.gallonsRequested;
    res.status(200).send({
        message: `Fuel quote information successfully quoted!`,
        suggestedPrice: sugg,
        totalCost: totalCost
    });
    console.log(sugg, totalCost);
})

router.post('/', async (req, res) => {
    let user = req.body;
    const quote = new FuelQuoteModule(user.username, user.gallonsRequested, user.deliveryAddress, user.deliveryDate, user.state);
    let sugg = 0;
    var history = 0;
    try{
        const historyCheck = await pool.query(
            `SELECT COUNT(*) AS row_count FROM fuelquote WHERE username = ${user.username};`
          );
        history = parseInt(historyCheck.rows[0].row_count);
    }
    catch(error){
    }

    sugg = quote.createQuote(history);
    totalCost = sugg * user.gallonsRequested;

    let sql =
    `
    INSERT INTO fuelquote(username, requested, delivAddress, delivDate, suggPrice,totalCost)
    VALUES('${user.username}', '${user.gallonsRequested}','${user.deliveryAddress}','${user.deliveryDate}','${sugg}','${totalCost}');
    `;
    try {
        connection.query(sql, (err, result) => {
            res.status(200).send({
                message: `Fuel quote information successfully quoted!`,
                suggestedPrice: sugg
            });
            console.log("Fuel quote suggested:", sugg);
            console.log(user.username, user.gallonsRequested, user.deliveryAddress);
        });
    }
    catch (error) {
        //res.status(500).send({ message: "Error processing request", error: error.message });
    }
});

module.exports = router;

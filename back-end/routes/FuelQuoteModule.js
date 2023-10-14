var express = require('express');
var router = express.Router();

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
})

router.post('/', async (req, res) => { 
    let user = req.body;
    const quote = new FuelQuoteModule(user.gallonsRequested, user.deliveryAddress, user.deliveryDate);
    quote.createQuote();
});

module.exports = router;
module.exports = FuelQuoteModule;
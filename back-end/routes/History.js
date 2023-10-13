var express = require('express');
var router = express.Router();

const orders = [
    {
        id: 1,
        fuelAmount: 72,
        profitMargin: 0.125,
        totalCost: 42300.24,
        address: "698 Candlewood Lane, Cabot Cove, Maine",
        date: new Date("2000-07-03"),
    },
    {
        id: 2,
        fuelAmount: 64,
        profitMargin: 0.105,
        totalCost: 654782.03,
        address: "1600 Pennsylvania Avenue, Washington, D.C., USA",
        date: new Date("2000-10-13"),
    },
]

router.get('/', async(req, res) => {
    res.json(orders);
})

router.post('/', async (req, res) => { 
    //console.log(orders[1].fuelAmount);
});

module.exports = router;
var express = require('express');
var router = express.Router();

/*let orders = {
    "1":{
        fuelAmount: 72,
        profitMargin: 0.125,
        totalCost: 42300.24,
        address: "698 Candlewood Lane, Cabot Cove, Maine",
        shipDate: new Date("2000-07-03"),
    },
    "2":{
        fuelAmount: 64,
        profitMargin: 0.105,
        totalCost: 654782.03,
        address: "1600 Pennsylvania Avenue, Washington, D.C., USA",
        shipDate: new Date("2000-10-13"),
    },
}
*/

const orders = [
    {
      id: 1,
      name: 'Order 1',
      date: '2023-10-12',
    },
    {
      id: 2,
      name: 'Order 2',
      date: '2023-10-13',
    },
  ];

router.get('/', async(req, res) => {
    res.send("GET HANDLER for /Profile/History route");
    res.json(orders);
})

router.post('/', async (req, res) => { 
    console.log(orders[1].fuelAmount);
});

module.exports = router;
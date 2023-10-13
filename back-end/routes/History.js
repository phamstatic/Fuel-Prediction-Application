var express = require('express');
var router = express.Router();

const orders = [
    {
        id: 1,
        fuelAmount: 72,
        profitMargin: 0.125,
        totalCost: 42300.24,
        address: "698 Candlewood Lane, Cabot Cove, Maine",
        date: "2000-07-03",
    },
    {
        id: 2,
        fuelAmount: 64,
        profitMargin: 0.105,
        totalCost: 654782.03,
        address: "1600 Pennsylvania Avenue, Washington, D.C., USA",
        date: "2000-10-13",
    },
    {
      id: 3,
      fuelAmount: 89,
      profitMargin: 0.135,
      totalCost: 52943.75,
      address: "1234 Elm Street, Springfield, USA",
      date: "2001-02-25",
  },
  {
      id: 4,
      fuelAmount: 45,
      profitMargin: 0.095,
      totalCost: 36781.12,
      address: "456 Oak Avenue, Sunnydale, California, USA",
      date: "2001-04-10",
  },
  {
      id: 5,
      fuelAmount: 73,
      profitMargin: 0.125,
      totalCost: 89234.99,
      address: "789 Maple Road, Gotham City, USA",
      date: "2001-06-15",
  },
  {
      id: 6,
      fuelAmount: 55,
      profitMargin: 0.105,
      totalCost: 62321.68,
      address: "567 Pine Lane, Metropolis, USA",
      date: "2001-08-20",
  },
  {
      id: 7,
      fuelAmount: 98,
      profitMargin: 0.14,
      totalCost: 76543.21,
      address: "1010 Birch Avenue, Star City, USA",
      date: "2001-10-25",
  },
  {
      id: 8,
      fuelAmount: 60,
      profitMargin: 0.110,
      totalCost: 43298.87,
      address: "2468 Cedar Street, Central City, USA",
      date: "2001-12-30",
  },
  {
      id: 9,
      fuelAmount: 81,
      profitMargin: 0.130,
      totalCost: 67459.45,
      address: "1357 Fir Road, Wakanda, USA",
      date: "2002-02-05",
  },
  {
      id: 10,
      fuelAmount: 67,
      profitMargin: 0.120,
      totalCost: 54367.32,
      address: "9876 Redwood Lane, Asgard, USA",
      date: "2002-04-10",
  },
];


router.get('/', async(req, res) => {
    res.json(orders);
})

router.post('/', async (req, res) => { 
  console.log("PING");
  let criteria = req.body;
  console.log(criteria);
  let response = "Searching by ";
  if(criteria.gallonCheck){
    response += "gallons (between " + gallonMin + " and " + gallonMax + ") ";
  }
  console.log("READING");
  res.send({
    message: "READING"
  });
});

module.exports = router;
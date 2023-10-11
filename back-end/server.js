const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "**The front-end is connected to the back-end.**" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });

history = {
    1: {
        fuelAmount: 5,
        profitMargin: 0.125,
        totalCost: 65403.12,
        address: "32 P. Sherman, Wallaby Way, Sydney AU",
        date: "11/5/2015"
    },
  }

  app.get('/history', (req, res) => {
    res.json({ history: history });
});
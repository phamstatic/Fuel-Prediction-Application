const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())


// Modules
app.use("/Login", require("./routes/Login"));
app.use("/Register", require("./routes/Register"));
app.use("/Profile", require("./routes/Profile"));
app.use("/Profile/Quote", require("./routes/FuelQuoteModule"));
app.use("/History", require("./routes/History"));

module.exports = app;
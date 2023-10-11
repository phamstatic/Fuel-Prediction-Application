const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())

// Modules
app.use("/Login", require("./routes/Login"));

module.exports = app;
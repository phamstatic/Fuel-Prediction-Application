var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

router.get('/', async(req, res) => {
    //res.status(200).send(orders);
    
    try {
        connection.query(`SELECT * FROM fuelquote;`, (err, result) => {
            res.json(result);
        })
    }
    catch (error) {
    }
})


module.exports = router;
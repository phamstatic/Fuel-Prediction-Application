var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

class profile {
    constructor(username, name, address1, address2, city, state, zip) {
        this.username = username;
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}
test = new profile("Alex", "Street", "Street2", "Houston", "TX", "12345");
const clients = []
clients.push(test);

router.get('/', async (req, res) => {
    res.send('GET HANDLER for /PROFILE route');
})

router.post('/', async (req, res) => {
    let user = req.body;
    const client = new profile(user.username, user.fullName, user.address1, user.address2, user.city, user.state, user.zip);

    let sql =
    `
    INSERT INTO client (username,fullName,address1,address2,city,state,zip)
    VALUES('${user.username}', '${user.fullName}', '${user.address1}', '${user.address2}', '${user.city}', '${user.state}', '${user.zip}');
    `;

    try {
        connection.query(sql, (error, result) => {
            res.status(200).send({
                message: `User profile successfully created. ${user.fullName} ${user.username}`
            });
        });

    }
    catch (error) {
    }

    clients.push(client);
});

module.exports = router;
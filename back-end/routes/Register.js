var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

router.get('/', async (req, res) => {
    res.send("GET HANDLER for /REGISTER route");
})

AddUser = (username, password) => {
    connection.query(`INSERT INTO login (username, password) VALUES('${username}', '${password}')`, (err, result) => {
    });
}

router.post('/', async (req, res) => {
    let user = req.body;
    try {
        connection.query(`SELECT 1 FROM login WHERE username = '${user.username}';`, (err, result) => {
            if (result.length > 0) { // The username is taken
                res.status(400).send({
                    message: "Username already taken! Please try again.",
                    success: false
                })
            }
            else { // The username is not taken
                AddUser(user.username, user.password);
                res.status(200).send({
                    message: "Successfully registered!",
                    success: true
                });
            }
        }
        )
    }
    catch (error) {

    }

});

module.exports = router;
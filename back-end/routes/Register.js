var express = require('express');
var router = express.Router();
var connection = require("../database/Database");
var bcrypt = require('bcrypt');

const saltRounds = 10; 

router.get('/', async (req, res) => {
    res.send("GET HANDLER for /REGISTER route");
})

PrintAll = () => {
    connection.query(`SELECT * FROM login;`, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
}

AddUser = (username, password) => {
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) throw err;
        connection.query(`INSERT INTO login (username, password) VALUES('${username}', '${hashedPassword}')`, (err, result) => {
            if (err) throw err;
            PrintAll(); // Remove this later on.
        });
    });
}

router.post('/', async (req, res) => {
    let user = req.body;
    try {
        connection.query(`SELECT 1 FROM login WHERE username = '${user.username}';`, (err, result) => {
            if (err) throw err;
            else if (result.length > 0) { // The username is taken
                res.send({
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
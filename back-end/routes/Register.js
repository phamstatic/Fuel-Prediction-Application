var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

router.get('/', async(req, res) => {
    res.send("GET HANDLER for /REGISTER route");
})

// Need a way to add user login information to save and verify.
router.post('/', async (req, res) => { 
    let user = req.body;
    console.log(user);
    console.log(`User ${user.username} registered with password ${user.password}`);
    res.status(200).send(`User ${user.username} registered with password ${user.password}`);


    let sql = 
    `
    INSERT INTO login (username, password)
    VALUES('${user.username}', '${user.password}');
    `;
    connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    });
});

module.exports = router;
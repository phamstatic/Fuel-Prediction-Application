var express = require('express');
var router = express.Router();
var connection = require("../database/Database");

router.get('/', async(req, res) => {
    res.send("GET HANDLER for /REGISTER route");
})

PrintAll = () => {
    let sql = `SELECT * FROM login;`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
}

AddUser = (username, password) => {
    let sql = 
    `
    INSERT INTO login (username, password)
    VALUES('${username}', '${password}');
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        PrintAll();
    });
}

router.post('/', async (req, res) => {
    let user = req.body;
    try {
        connection.query(
            `SELECT 1 FROM login WHERE username = '${user.username}';`,
            (err, result) => {
                if (err) throw err;
                else if (result.length > 0) { // The username is taken
                    console.log("username taken");
                }
                else { // The username is not taken
                    console.log("username not taken");
                    AddUser(user.username, user.password);
                }
            }
        )
    }
    catch (error) {
         
    }

});

module.exports = router;
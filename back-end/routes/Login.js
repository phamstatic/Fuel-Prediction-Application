var express = require('express');
var router = express.Router();
var connection = require("../database/Database");
const bcrypt = require("bcrypt");


router.get('/', async(req, res) => {
    res.send("GET HANDLER for /Login route"); 
})

router.post('/', async (req, res) => { 
    let user = req.body;
    try{
        connection.query(`SELECT log.password, cli.fullName 
                        FROM login log LEFT JOIN client cli ON log.username = cli.username 
                        WHERE log.username = ?`, [user.username], async (err, results) => {
            if (err) throw err;
            if (results.length === 0) {
                res.status(404).send({
                    message: "Username not found.",
                    success: false
                });
                return;
            }

            const hashedPassword = results[0].password;
            const isPasswordCorrect = await bcrypt.compare(user.password, hashedPassword);
            if (!isPasswordCorrect) {
                res.status(400).send({
                    message: "Incorrect password.",
                    success: false
                });
                return;
            }
            
            const fullName = results[0].fullName;
            if (!fullName) {
                res.status(200).send({
                    message: "Complete your profile!",
                    success: true,
                    firstTimeLogin: true
                });
                return;
            }
            res.status(200).send({
                message: "Login successful!",
                success: true,
                firstTimeLogin: false
            });
        });
    } catch (error) {

    }
});

module.exports = router;
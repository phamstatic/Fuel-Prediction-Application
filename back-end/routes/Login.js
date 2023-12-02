var express = require('express');
var router = express.Router();
var connection = require("../database/Database");
const bcrypt = require("bcrypt");


router.get('/', async(req, res) => {
    res.send("GET HANDLER for /LOGIN route"); 
})

router.post('/', async (req, res) => { 
    let user = req.body;
    if(!user || !user.username) {
        res.status(400).send({
            message: "Username is required.",
            success: false
        });
        return;
    }
    if(!user.password) {
        res.status(400).send({
            message: "Password is required.",
            success: false
        });
        return;
    }
    try{
        let sql = 'SELECT log.password, cli.fullName FROM login log LEFT JOIN client cli ON log.username = cli.username WHERE log.username = ?';
        connection.query(sql, [user.username], async (err, results) => {
            if (err) throw err;
            console.log(results);
            if (results.length === 0) {
                res.status(404).send({
                    message: "Username not found.",
                    success: false
                });
                console.log("Username not found.");
                return;
            }

            const hashedPassword = results[0].password;
            const isPasswordCorrect = await bcrypt.compare(user.password, hashedPassword);
            console.log("User entered password:", user.password);
            console.log("Hashed password from DB:", hashedPassword);
            if (!isPasswordCorrect) {
                console.log("Incorrect password.")
                return res.status(400).send({
                    message: "Incorrect password.",
                    success: false
                });
            }
            
            const fullName = results[0].fullName;
            if (!fullName) {
                return res.status(200).send({
                    message: "Complete your profile!",
                    success: true,
                    firstTimeLogin: true
                });
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
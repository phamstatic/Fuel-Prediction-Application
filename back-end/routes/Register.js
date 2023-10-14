var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
    res.send("GET HANDLER for /REGISTER route");
})

// Need a way to add user login information to save and verify.
router.post('/', async (req, res) => { 
    let user = req.body;
    console.log(user);
    console.log(`User ${user.username} registered with password ${user.password}`);
    res.status(200).send(`User ${user.username} registered with password ${user.password}`);
});

module.exports = router;
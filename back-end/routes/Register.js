var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
    res.send("GET HANDLER for /REGISTER route");
})

router.post('/', async (req, res) => { 
    let user = req.body;
    console.log(user);
    console.log(`User ${user.username} registered with password ${user.password}`);
});

module.exports = router;
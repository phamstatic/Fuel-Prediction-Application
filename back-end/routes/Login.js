var express = require('express');
var router = express.Router();

const users = {
    "admin" : "password",
    "john" : "pham"
}

const Authentication = (username, password) => {
    console.log(`user: ${username}, password: ${password}`)
    if (Object.keys(users).includes(username)) {
        if (Object.values === password) {
            console.log(`User ${username} is validated!`);  
            return true;
        }
    }
    return false;
}

router.get('/', async(req, res) => {
    res.send("GET HANDLER for /Login route");
})

router.post('/', async (req, res) => { 
    let user = req.body;
    console.log(user);
    Authentication(user.username, user.password); 
});

module.exports = router;
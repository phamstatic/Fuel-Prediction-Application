var express = require('express');
var router = express.Router();

const users = {
    "admin": {
        "password": "password",
        "firstLogin": true
    },
    "john": {
        "password": "pham",
        "firstLogin": true
    }
}

const Authentication = (username, password) => {
    console.log(`user: ${username}, password: ${password}`)
    if (Object.keys(users).includes(username)) {
        if (Object.values === password) {
            console.log(`User ${username} is validated!`);  
            const firstLogin = users[username].firstLogin;
            users[username].firstLogin = false;
            return {
                authenticated: true,
                firstLogin: firstLogin
            };
        }
    }
    return {
        authenticated: false 
    };
}

router.get('/', async(req, res) => {
    res.send("test message"); 
})

router.post('/', async (req, res) => { 
    let user = req.body;
    console.log(user);
    let result = Authentication(user.username, user.password); 
    if(result.authenticated){
        res.status(200).send({
            message: "Login Successful",
            firstLogin: result.firstLogin
        });    
    } else{
        res.status(401).send({
            message: "Invalid Credentials"
        });
    }
});

module.exports = router;
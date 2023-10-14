var express = require('express');
var router = express.Router();

const users = {
    "admin": {
        "password": "password",
        "firstLogin": true
    },
    "john": {
        "password": "pham",
        "firstLogin": false
    }
}

const Authentication = (username, password) => {
    console.log(`user: ${username}, password: ${password}`)
    if (!users[username]) {
        console.log(`User ${username} is invalid!`);
        return {
            authenticated: false 
        };
    }
    if (users[username].password !== password) {
        console.log(`Password ${password} is invalid!`);
        return {
            authenticated: false 
        };
    }
    console.log(`User ${username} and Password ${password} is validated!`);  
    const firstLogin = users[username].firstLogin;
    users[username].firstLogin = false;
    return {
        authenticated: true,
        firstLogin: firstLogin
    };
}


router.get('/', async(req, res) => {
    res.send(users); 
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
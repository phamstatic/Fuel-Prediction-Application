const express = require('express');
const cors = require('cors');
const axios = require('axios')
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const port = 8000;

app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`)
})

const users = {
    "admin" : "password",
    "john" : "pham"
}

const Authentication = (username, password) => {
    console.log(`user: ${username}, password: ${password}`)
    if (Object.keys(users).includes(username)) {
        if (Object.values === password) {
            console.log(`User ${username} is validated!`);  
        }
    }
}

app.post('/api/login', (req, res) => { 
    let login = req.body;
    console.log(login);
    Authentication(login.username, login.password); 
});

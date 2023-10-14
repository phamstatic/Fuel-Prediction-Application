var express = require('express');
var router = express.Router();

class profile {
    constructor(name,address1,address2,city,state,zip){
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip =  zip;
    }
    information(){
        return this.name + ',' +this.address + ',' + this.city + ',' + this.state + ',' + this.zip;
    }
}
test = new profile("Alex","Street","Street2","Houston","TX","12345");
const clients = []
clients.push(test);



router.get('/', async(req, res) => {
    res.send('GET HANDLER for /Profile route');
})

router.post('/', async (req, res) => { 
    let user = req.body;
    console.log(user);
    const client = new profile(user.fullName,user.address1,user.address2,user.city,user.state,user.zip);
    clients.push(client);
});

module.exports = router;
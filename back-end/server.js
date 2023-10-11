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

app.post('/api/login', (req, res) => {
    console.log(req.body);
});

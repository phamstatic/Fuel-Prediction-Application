const mysql = require('mysql')

const connection = mysql.createConnection({
    database: "testing",
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true
})

connection.connect((err => {
    //console.log('MySQL Connected');
}));

module.exports = connection;
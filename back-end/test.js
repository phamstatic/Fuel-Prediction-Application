const mysql = require('mysql')

const connection = mysql.createConnection({
    database: "testing",
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true
})

connection.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));

let sql = 'SELECT * FROM login';
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
});

connection.end()


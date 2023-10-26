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

let username = "ligma";
let sql = `SELECT * FROM login WHERE username = '${username}';`;
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result[0].username);
});

connection.end()


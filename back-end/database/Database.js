const mysql = require('mysql')
var bcrypt = require('bcrypt');
const saltRounds = 10; 

const connection = mysql.createConnection({
    database: "testing",
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true,
    multipleStatements : true
})


connection.connect((err => {
    console.log('MySQL Database Connected');
    bcrypt.hash("password", saltRounds, (err, hashedPassword) => {
        connection.query(`
        DROP TABLE IF EXISTS login;
        CREATE TABLE login (
            username varchar(255) PRIMARY KEY,
            password varchar(255)
        );
    
        INSERT INTO login (username, password) VALUES('admin', '${hashedPassword}');
    
        DROP TABLE IF EXISTS fuelQuote;
        CREATE TABLE fuelQuote(
            username VARCHAR(255),
            requested INT,
            delivAddress VARCHAR(255), 
            delivDate VARCHAR(255),
            suggPrice DECIMAL(10,2),
            totalCost DECIMAL(10,2)
        );
        INSERT INTO fuelQuote(username,requested,delivAddress,suggPrice,totalCost)
        VALUES('admin', 10, 'street1', 1.61, 16.05);
    
        DROP TABLE IF EXISTS client;
        CREATE TABLE client (
            username VARCHAR(255) PRIMARY KEY,
            fullName VARCHAR(255),
            address1 VARCHAR(255),
            address2 VARCHAR(255),
            city VARCHAR(255),
            state VARCHAR(2),
            zip VARCHAR(255)
        );
    
        INSERT INTO client(username, fullName, address1, address2, city, state, zip)
        VALUES('yuji', 'Yuji Itadori', '939 Euclid Ave.', ' ', 'Los Angeles', 'CA', '90008');
        
        INSERT INTO client(username, fullName, address1, address2, city, state, zip)
        VALUES('megumi', 'Megumi Fushiguro', '8528 Beaver Ridge Lane', ' ', 'Southington', 'CT', '06489');
        
        INSERT INTO client(username, fullName, address1, address2, city, state, zip)
        VALUES('nobara', 'Nobara Kugisaki', '194 South Albany Dr.', ' ', 'Bethpage', 'NY', '11714');
        
        INSERT INTO client(username, fullName, address1, address2, city, state, zip)
        VALUES('gojo', 'Satoru Gojo', '93 San Juan Dr.', ' ', 'Victoria', 'TX', '77904');
        
        `, (err, result) => {
            console.log('Database Loaded!');
        });
    });
    
}));

/// Predatabase Information Loading



module.exports = connection; 
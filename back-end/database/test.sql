USE testing;

DROP TABLE IF EXISTS Login;
CREATE TABLE login (
    username varchar(255) PRIMARY KEY,
    password varchar(255)
);

INSERT INTO login (username, password)
VALUES('john', 'pham');


CREATE TABLE client (
    fullName VARCHAR(255) PRIMARY KEY,
    address1 VARCHAR(255),
    address2 VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(2),
    zip VARCHAR(255)
);
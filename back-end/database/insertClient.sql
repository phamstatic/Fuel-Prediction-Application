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
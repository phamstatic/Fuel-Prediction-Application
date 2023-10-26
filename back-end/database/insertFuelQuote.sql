DROP TABLE IF EXISTS fuelQuote;
CREATE TABLE fuelQuote(
    username VARCHAR(255) PRIMARY KEY,
    requested INT,
    delivAddress VARCHAR(255), 
    delivDate VARCHAR(255),
    suggPrice DECIMAL(10,2)
);

INSERT INTO fuelQuote(username, requested, delivAddress, delivDate, suggPrice)
VALUES('yuji', '0', '939 Euclid Ave., Los Angeles, CA 90008', 'N/A', '0.00');

INSERT INTO fuelQuote(username, requested, delivAddress, delivDate, suggPrice)
VALUES('megumi', '0', '8528 Beaver Ridge Lane, Southington, CT 06489', 'N/A', '0.00');

INSERT INTO fuelQuote(username, requested, delivAddress, delivDate, suggPrice)
VALUES('nobara', '0', '194 South Albany Dr., Bethpage, NY, 11714', 'N/A', '0.00');

INSERT INTO fuelQuote(username, requested, delivAddress, delivDate, suggPrice)
VALUES('gojo', '0', '93 San Juan Dr., Victoria, TX 77904', 'N/A', '0.00');
USE testing;

DROP TABLE IF EXISTS Login;
CREATE TABLE login (
    username varchar(255) PRIMARY KEY,
    password varchar(255)
);

INSERT INTO login (username, password)
VALUES('john', 'pham');
VALUES('admin', 'password');
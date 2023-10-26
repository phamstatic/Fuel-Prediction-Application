DROP TABLE IF EXISTS Login;
CREATE TABLE login (
    username varchar(255) PRIMARY KEY,
    password varchar(255)
);

INSERT INTO login (username, password)
VALUES('admin', 'password');

INSERT INTO login (username, password)
VALUES('user1', 'password12345');
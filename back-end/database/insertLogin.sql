DROP TABLE IF EXISTS Login;
CREATE TABLE login (
    username varchar(255) PRIMARY KEY,
    password varchar(255)
);

INSERT INTO login (username, password)
VALUES('admin', 'password');

INSERT INTO login (username, password)
VALUES('john', 'john12');

INSERT INTO login (username, password)
VALUES('alexander', 'alexander12');

INSERT INTO login (username, password)
VALUES('anthony', 'anthony');

INSERT INTO login (username, password)
VALUES('james', 'james');
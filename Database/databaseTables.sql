DROP TABLE IF EXISTS "login";
CREATE TABLE "login"(
    "username" VARCHAR PRIMARY KEY,
    "password" varchar
);

DROP TABLE IF EXISTS "client";
CREATE TABLE "client"(
    "username" VARCHAR PRIMARY KEY,
    "fullName" VARCHAR,
    "address1" VARCHAR,
    "address2" VARCHAR,
    "city" VARCHAR,
    "State" VARCHAR(2),
    "zip" VARCHAR
)

DROP TABLE IF EXISTS "fuelQuote";
CREATE TABLE "fuelQuote"(
    "username" Varchar PRIMARY KEY,
    "requested" INT,
    "delivAddress" VARCHAR, 
    "delivDate" VARCHAR,
    "suggPrice" DECIMAL(10,2)
)
ALTER table "client" ADD FOREIGN key ("username") REFERENCES "login" ("username");
ALTER table "fuelQuote" ADD FOREIGN key ("username") REFERENCES "login" ("username");

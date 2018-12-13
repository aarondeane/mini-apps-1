CREATE DATABASE Orders;

Use Orders;

CREATE TABLE orderlist (
    id INT NOT NULL AUTO_INCREMENT,
    firstName: VARCHAR(20),
    lastName: VARCHAR(20),
    email: VARCHAR(50),
    password: VARCHAR(50),
    address1: VARCHAR(50),
    address2:VARCHAR(50),
    city: VARCHAR(30),
    state: VARCHAR(50),
    zip: INT,
    phone: INT,
    cardnum: INT,
    expire: DATE,
    cvv: INT,
    billZip: INT,
)
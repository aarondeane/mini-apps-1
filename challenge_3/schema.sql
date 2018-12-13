CREATE DATABASE IF NOT EXISTS Order_List;

Use Order_List;

CREATE TABLE customerorders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    address1 VARCHAR(50),
    address2 VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(50),
    zip INT NOT NULL,
    phone INT NOT NULL,
    cardnum INT NOT NULL,
    expire INT NOT NULL,
    cvv INT NOT NULL,
    billZip INT NOT NULL,
);
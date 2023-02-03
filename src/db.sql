CREATE DATABASE curriculum;

USE curriculum;

CREATE Table profile(
    id INT NOT NULL AUTO_INCREMENT,
    nameImg VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    identific VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    occupation VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE Studies(
    id INT NOT NULL AUTO_INCREMENT,
    Studies1 VARCHAR(255) NOT NULL,
    Studies2 VARCHAR(255) NOT NULL,
    Studies3 VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

-- Experiences

CREATE TABLE Experiences(
    id INT NOT NULL AUTO_INCREMENT,
    Experiences1 VARCHAR(255) NOT NULL,
    Experiences11 VARCHAR(255) NOT NULL,
    Experiences2 VARCHAR(255) NOT NULL,
    Experiences22 VARCHAR(255) NOT NULL,
    Experiences3 VARCHAR(255) NOT NULL,
    Experiences33 VARCHAR(255) NOT NULL,
    Experiences4 VARCHAR(255) NOT NULL,
    Experiences44 VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

-- References

CREATE TABLE References1(
    id INT NOT NULL AUTO_INCREMENT,
    References1 VARCHAR(255) NOT NULL,
    References11 VARCHAR(255) NOT NULL,
    References2 VARCHAR(255) NOT NULL,
    References22 VARCHAR(255) NOT NULL,
    References3 VARCHAR(255) NOT NULL,
    References33 VARCHAR(255) NOT NULL,
    References4 VARCHAR(255) NOT NULL,
    References44 VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


-- Skills

 CREATE TABLE Skills (
    id INT NOT NULL AUTO_INCREMENT,
    Skills1 VARCHAR(255) NOT NULL,
    Skills2 VARCHAR(255) NOT NULL,
    Skills3 VARCHAR(255) NOT NULL,
    Skills4 VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


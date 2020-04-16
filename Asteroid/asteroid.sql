DROP DATABASE IF EXISTS asteroid;
CREATE DATABASE IF NOT EXISTS asteroid;
USE asteroid;

DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users(
    CodUser int(11) PRIMARY KEY AUTO_INCREMENT,
    Nome varchar(100) NOT NULL,
    Cognome varchar(100) NOT NULL,
	Username CHAR(50) NOT NULL,
    Password CHAR(50) NOT NULL  
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;


DROP TABLE IF EXISTS Classifica;

CREATE TABLE IF NOT EXISTS Classifica(
      
     CodeNumber int(11) PRIMARY KEY auto_increment, 
     Username CHAR(50)  NOT NULL,
     Score int(11) NOT NULL
    

)ENGINE=InnoDB DEFAULT CHARSET=UTF8;





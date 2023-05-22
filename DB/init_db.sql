Create Database AUTOHUB;
Use AUTOHUB;

CREATE TABLE User (
    User_ID INT NOT NULL,
    Username Varchar (50),
    Email Varchar (50),
    Phone_No INT,
    Password varchar(50),
  	PRIMARY KEY (User_ID)
 );
 
CREATE TABLE Ads (
    Ad_ID INT NOT NULL,
    User_ID INT NOT NULL,
  	PRIMARY KEY (Ad_ID),
    FOREIGN KEY (User_ID) REFERENCES User(User_ID)
 );

CREATE TABLE Favorite_Ads (
    Favorite_ID INT NOT NULL,
    User_ID INT NOT NULL,
    Ad_ID INT NOT NULL,
  	PRIMARY KEY (Favorite_ID),
    FOREIGN KEY (User_ID) REFERENCES User(User_ID),
    FOREIGN KEY (Ad_ID) REFERENCES Ads(Ad_ID)
 );
 
CREATE TABLE Spare_Parts (
    Part_id INT NOT NULL,
    User_ID INT NOT NULL,
    Ad_ID INT NOT NULL,
	Condition varchar(255),
	Name varchar(255),
	Price int,
	Desp varchar(255),
  	PRIMARY KEY (Part_id),
    FOREIGN KEY (User_ID) REFERENCES User(User_ID),
    FOREIGN KEY (Ad_ID) REFERENCES Ads(Ad_ID)
  
 );
CREATE TABLE Vehicle (
    Vehicle_ID INT NOT NULL,
    User_ID INT NOT NULL,
    Ad_ID INT NOT NULL,
	Location varchar(255),
	Exterior_Color varchar(255),
	Make varchar(255),
	Model_Year	int,
	Model varchar(255),
    Registration varchar(255),
    City varchar(255),
    Mileage int,
	Price int,
    Condition varchar(255),
	Type varchar(255),
    Desp varchar(255),
  	PRIMARY KEY (Vehicle_ID),
    FOREIGN KEY (User_ID) REFERENCES User(User_ID),
    FOREIGN KEY (Ad_ID) REFERENCES Ads(Ad_ID)
 );


INSERT INTO User (User_ID, Username, Email, Phone_No, Password)
VALUES
(1, 'JohnDoe', 'johndoe@example.com', 1234567890, 'password123'),
(2, 'JaneSmith', 'janesmith@example.com', 9876543210, 'password456'),
(3, 'MikeJohnson', 'mikejohnson@example.com', 5555555555, 'password789'),
(4, 'SarahWilson', 'sarahwilson@example.com', 1111111111, 'passwordabc'),
(5, 'DavidBrown', 'davidbrown@example.com', 9999999999, 'passwordxyz');

INSERT INTO Ads (Ad_ID, User_ID)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5);

INSERT INTO Favorite_Ads (Favorite_ID, User_ID, Ad_ID)
VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 4),
(4, 4, 3),
(5, 5, 5);

INSERT INTO Spare_Parts (Part_id, User_ID, Ad_ID, Condition, Name, Price, Desp)
VALUES
(1, 1, 1, 'Used', 'Engine', 5000, 'Good condition engine for sale.'),
(2, 2, 2, 'New', 'Brake Pads', 2000, 'Brand new brake pads for sale.'),
(3, 3, 3, 'Used', 'Transmission', 8000, 'Used transmission in working condition.'),
(4, 4, 4, 'Used', 'Headlights', 1500, 'Used headlights for sale.'),
(5, 5, 5, 'New', 'Battery', 3000, 'Brand new battery for sale.');

INSERT INTO Vehicle (Vehicle_ID, User_ID, Ad_ID, Location, Exterior_Color, Make, Model_Year, Model, Registration, City, Mileage, Price, Condition, Type, Desp)
VALUES
(1, 1, 6, 'Karachi', 'Silver', 'Toyota', 2018, 'Corolla', 'ABC123', 'Karachi', 50000, 1500000, 'Used', 'car', 'Good condition Corolla for sale.'),
(2, 2, 7, 'Lahore', 'Black', 'Honda', 2020, 'Civic', 'XYZ789', 'Lahore', 30000, 1800000, 'Used', 'car', 'Well-maintained Civic available.'),
(3, 3, 8, 'Islamabad', 'Red', 'Suzuki', 2015, 'Cultus', 'PQR456', 'Islamabad', 80000, 600000, 'Used', 'car', 'Family car in good condition.'),
(4, 4, 9, 'Rawalpindi', 'White', 'Hyundai', 2019, 'Tucson', 'MNO012', 'Rawalpindi', 40000, 2000000, 'Used', 'SUV', 'Spacious SUV for sale.'),
(5, 5, 10, 'Faisalabad', 'Blue', 'Kia', 2021, 'Sportage', 'DEF345', 'Faisalabad', 20000, 2500000, 'Used', 'SUV', 'Excellent condition Sportage available.');

/*Following are some quries*/

/*Qurey no 1*/
/*For Login we use the following qureies*/

SELECT EXISTS(SELECT * from User WHERE Username="Rafay" AND Password = "password123");

/*Qurey no 2*/
/*For Signup we use the following qureies*/

INSERT INTO User
VALUES (6,"Alii", "Ali@gmail.com", 1121928, "ali123");

/*Qurey no 3*/
/*For Changings in Setting we use the following qureies*/

UPDATE User
SET Username = "Alii"
WHERE User_ID = 6;

/*Qurey no 4*/
/*For display my ads we use the following qureies*/

SELECT * from Ads WHERE User_ID = 3

/*Qurey no 5*/
/*For display all Favorite ads we use the following qureies*/

SELECT * from Favorite_Ads WHERE User_ID = 5

/*Qurey no 6*/
/*To remove a Favorite ads we use the following qureies*/

DELETE FROM Favorite_Ads WHERE Ad_ID = 5;

/*Qurey no 7*/
/*To ADd a new ads we use the following qureies*/

INSERT INTO Ads
VALUES(11,2);
INSERT INTO Vehicle 
VALUES
(6, 2, 11, 'Lahore', 'Silver', 'Toyota', 2018, 'Altis', 'Leu112', 'Karachi', 50000, 1800000, 'Used', 'Car', 'Good condition Corolla for sale.')

/*Qurey no 8*/
/*Filter qurey to find desire models*/

SELECT *
FROM Vehicle
WHERE Model_Year BETWEEN 2018 AND 2020;

/*Qurey no 9*/
/*Filter qurey to find desire price*/

SELECT *
FROM Vehicle
WHERE Price BETWEEN 1700000 AND 2000000;

/*Qurey no 10*/
/*Filter qurey to find Suvs*/

SELECT *
FROM Vehicle
WHERE type ="SUV";
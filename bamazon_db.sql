DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100),
department_name VARCHAR(50),
price DECIMAL(10,2) NULL,
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Dog Dragon Costume", "Pet", 12.99, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Cat Litter", "Pet", 17.13, 15);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Seat Cover", "Automotive", 24.69, 75);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Replacement LED Lights Pack of 20", "Automotive", 5.99, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Digital Food Thermometer", "Kitchen", 13.32, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("9'' Meat Cleaver", "Kitchen", 66.57, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("98'' LED Smart TV", "Electronics", 69999.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Wireless Camera", "Electronics", 23.49, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Dreadloc Tightrning Spray", "Beauty", 17.95, 80);
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES("Mango & Lime Oil", "Beauty", 60.80, 30);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'
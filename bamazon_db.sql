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
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
INSERT INTO products(product_name, department_name, price, stock_quantity)
	    VALUES();
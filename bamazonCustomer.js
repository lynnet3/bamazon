var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table3");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect();

var start = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err)
            throw err;

        console.log("   -----------------------------     ");
        console.log("           Welcome to bamazon!       ");
        console.log("   -----------------------------     ");
        console.log("Here's the list of items for purchase");
        console.log("");

        var table = new Table({
            head: ["ID", "Product", "Price"],
            colWidths: [20, 50, 10],
            colAligns: ["center", "left", "right"],
            style: {
                head: ["aqua"],
                compact: true
            }
        });
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].price]);
        }
        console.log(table.toString());
        shop();

    });
};

var shop = function () {
        inquirer
            .prompt({
                type: "input",
                message: "What from the items above would you like to buy?",
                name: "products"
            }).then(function (anw1) {
                var chosen = anw1.products;
                connection.query("SELECT * FROM products WHERE item_id=?", chosen, function (err, res) {
                    if (err)
                        throw err;
                    if (res.length === 0) {
                        console.log("Please pick an item from our list");
                        shop();
                    } else {
                        inquirer
                            .prompt({
                                type: "input",
                                message: "How many would you like?",
                                name: "amount",
                            })
                            .then(function(anw2){
                                var amount = anw2.amount;
                                if (amount > res[0].stock_quantity){
                                    console.log("Sorry we only have" + res[0].stock_quantity + "available");
                                } else{
                                    console.log(res[0].product_name + "has been purchesed")
                                    console.log(amount + "at" + res[0].price);
                                }
                                var newStock = res[0].stock_quantity - amount;
                                connection.query("UPDATE products SET stock_quantity =" + newStock + "WHERE item_id =" + res[0].item_id, function(err, resUp){
                                    if (err)
                                    throw err;
                                    console.log("Your items will be shipped soon thatnk you for shopping with us");
                                    connection.end();
                                });
                            });
                    }
                });
            });
         }
        start();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;

    console.log("its working");
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err)
            throw err;

        inquirer
            .prompt([{
                    type: "rawlist",
                    message: "Welcome to bamazon, here's our list of items what would like to purchase?",
                    choices: function () {
                        var itemsArr = [];
                        for (var i = 0; i < res.length; i++) {
                            itemsArr.push(res[i].product_name);
                        }
                        return itemsArr;
                    },
                    name: "products"
                },
                {
                    type: "input",
                    message: "How many would you like?",
                    name: "amount",
                    validate: function (val) {
                        if (isNaN(val) === false) {
                            return true;
                        }
                        return true;
                    }
                }

            ])
            .then(function (answer) {
                var chosen;
                var quantity = parseInt(answer.quantity);
                var howMuch = parseFloat(((res[chosen].price) * quantity).toFixed(2));

                connection.query("SELECT * FROM products", function (err, res) {
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].product_name === answer.choice) {
                                chosen = res[i];

                            }

                            if (quantity < res[chosen].stock_quantity) {
                                console.log("Your total will come to" + howMuch.toFixed(2));
                                buy();
                            }

                        }
                    }
                    //amount();
                )
            });
    })

}

// function amount() {
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err)
//             throw err;
//         inquirer
//             .prompt([{
//                 type: "input",
//                 message: "How many would you like?",
//                 name: "amount",
//                 // validate: function (val) {
//                 //     if (isNaN(val) === false) {
//                 //         return true;
//                 //     }
//                 //     return true;
//                 // }
//             }])
//             .then(function (howMany) {
//                 var quantity = parseInt(howMany.quantity);
//                 if (quantity < products.stock_quantity) {
//                     buy();
//                 } else {
//                     console.log("Sorry we don't have that many in stock");
//                     start();
//                 }
//             });
//     });


// }

function buy() {
    connection.query("UPDATE products SET ? WHERE ?" [{
                stock_quantity: quantity
            },
            {
                id: products.item_id
            }
        ],
        function (err, res) {
            if (err)
                throw err;
            console.log(res);
            console.log("Your item has been purchesed");
            readProducts();
        }
    )
}

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        console.log("Thank you for shopping with us have a good day")
        start();
    });
}
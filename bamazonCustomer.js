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

var start = function(){
    connection.query("SELECT * FROM products", function (err, res) {
        if (err)
        throw err;

        console.log("   -----------------------------     ");
        console.log("           Welcome to bamazon!       ");
        console.log("   -----------------------------     ");
        console.log("Here's the list of items for purchase");
        console.log("");
        
        var table = new Table({
            head: ["In Stock", "Product","Price"],
            colWidths: [20, 50, 10],
            colAligns:["center", "left", "right"],
            style: {
                head:["aqua"],
                compact: true
            }
        });
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].stock_quantity, res[i].product_name, res[i].price]);
        }
        console.log(table.toString());
        //shop();

    })
}
// connection.connect(function (err) {
//     if (err) throw err;

//     console.log("its working");
//     start();
//);

// function start() {
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err)
//             throw err;

//         inquirer
//             .prompt([{
//                     type: "rawlist",
//                     message: "Welcome to bamazon, here's our list of items what would like to purchase?",
//                     choices: function () {
//                         var itemsArr = [];
//                         for (var i = 0; i < res.length; i++) {
//                             itemsArr.push(res[i].product_name);
//                         }
//                         return itemsArr;
//                     },
//                     name: "products"
//                 },
//                 {
//                     type: "input",
//                     message: "How many would you like?",
//                     name: "amount",
//                     // validate: function (val) {
                    //     if (isNaN(val) === false) {
                    //         return true;
                    //     }
                    //     return true;
                    // }
//                }

//            ])
            // .then(function (answer) {


            //     connection.query("SELECT * FROM products", function (err, res) {
            //             var chosen;
            //             var quantity = parseInt(answer.quantity);
            //             var howMuch = parseFloat(((res[chosen].price) * quantity).toFixed(2));
            //             for (var i = 0; i < res.length; i++) {
            //                 if (res[i].product_name === answer.choice) {
            //                     chosen = res[i];
            //                 }

            //                 if (quantity < res[chosen].stock_quantity) {
            //                     console.log("Your total will come to" + howMuch.toFixed(2));
            //                     buy();
            //                 }

            //             }
            //         }
                    //amount();
//                )
//          });
//    })

//}

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

// function buy() {
//     connection.query("UPDATE products SET ? WHERE ?" [{
//                 stock_quantity: quantity
//             },
//             {
//                 id: products.item_id
//             }
//         ],
//         function (err, res) {
//             if (err)
//                 throw err;
//             console.log(res);
//             console.log("Your item has been purchesed");
//             readProducts();
//         }
//     )
// }

// function readProducts() {
//     console.log("Selecting all products...\n");
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err) throw err;
//         // Log all results of the SELECT statement
//         console.log(res);
//         console.log("Thank you for shopping with us have a good day")
//         start();
//     });
// }
start();
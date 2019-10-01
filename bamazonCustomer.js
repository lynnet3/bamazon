var mysql = require ("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  function start(){
      inquirer
        .prompt({
            type:"input",
            message:"Welcome, to bamazon here's our list of items what would like to purchase?",
            name:"products"
        })
        .then(function(answer){
            
        })
  }
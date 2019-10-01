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
    connection.query("SELECT * FROM products", function(err, res){
        if (err) 
        throw err;
        
        inquirer
        .prompt([
            {
                type:"rawlist",
                message:"Welcome, to bamazon here's our list of items what would like to purchase?",
                choices: function(){
                    var itemsArr = [];
                    for (var i = 0; i < res.length; i++){
                        itemsArr.push(res[i].item_name);
                    }
                    return itemsArr;
                },
                name:"products"
        },
        
    ]);
    .then(function(answer){
        var chosen;
        for (var i = 0; i < res.length; i++){
            if (res[i].item_name === answer.choice){
                chosen = res[i];
                amount();
            }else{
                console.log("That item is not availble");
                start();
            }
        }
    });
  })

}

function amount(){
    connection.query("SELECT *FROM products" function(err, res){
        if (err)
        throw err;
        inquirer
        .prompt([
            {
                type:"input",
                message: "How many would you like?",
                name: "amount"
            }
        ])
    .then(function(howMany){
        if (){
            buy();
        }else{
            console.log("Sorry we don't have that many in stock");
            start();
        }
    });
    });
    
        
}
function buy(){

}

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b5f94cb448e805",
    password:"80c01ea5",
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!!");
})


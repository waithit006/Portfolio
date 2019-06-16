var mysql = require('mysql');
const config = require('config')
const mysqlHost = config.get('mysqlHost')
const user = config.get('user')
const password = config.get('password')

var con = mysql.createConnection({
    host: mysqlHost,
    user: user,
    password: password,
})

const connectDB = () => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!!");
    })
}


module.exports = connectDB;
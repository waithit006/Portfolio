var mysql = require('mysql');
const config = require('config')
const mysqlHost = config.get('mysqlHost')
const user = config.get('user')
const password = config.get('password')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b5f94cb448e805",
    password: "80c01ea5",
    database: "heroku_ceac011142146d1"
});

register = (username, password, callback) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query(`insert into user (username, password) values ('${username}','${password}')`, function (error, results, fields) {


            callback(results)
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}

checkUsername = (username, callback) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(`select exists(select * from user where username='${username}') as result`, function (error, results, fields) {

            callback(results[0].result)

            connection.release();

            if (error) throw error;
        });
    });
}


findByuser = (username,callback) =>{
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(`select * from user where username='${username}'`, function (error, results, fields) {

            callback(results)

            connection.release();

            if (error) throw error;
        });
    });
}

module.exports = { register, checkUsername, findByuser }

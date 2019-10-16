const mysql = require ('mysql');

const con = mysql.createConnection({
    host:"tool-sharedb.ccdqjwmvzqxn.us-west-1.rds.amazonaws.com",
    user:"root",
    password:"root12345",
    port: 3306,
    database:"innodb"
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connected !!")
});


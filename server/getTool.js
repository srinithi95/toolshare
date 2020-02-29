const mysql = require ('mysql');

const con = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"qwe123",
    database:"toolshare"
})

const getTool = (req, res) => {
    console.log("get tool server");
    
    let query = `select * from tool`;
    con.query(query, (error, result) => {
        if(error)
            console.log(error)
        else{
            console.log("result is", result);
            res.send(result);
        }
    });
}

module.exports = getTool;
const mysql = require ('mysql');

const con = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"qwe123",
    database:"toolshare"
})

const getStory = (req, res) => {
    console.log("get story server");
    
    let query = `select * from story`;
    con.query(query, (error, result, field) => {
        if(error)
            console.log(error)
        else{
            console.log("result is", result);
            res.send(result);
        }
    });
}

module.exports = getStory;
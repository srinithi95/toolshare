const mysql = require ('mysql');

const con = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"qwe123",
    database:"toolshare"
})

const searchTool = (req, res) => {
    // con.connect(function(err){
    //     if(err) throw err;
    //     console.log("Connected !!")
    // });

    console.log("search tool server");

    let searchTerm = req.body.searchData.searchTool + "%";
    console.log("searchTerm is ", searchTerm);

//     SELECT * FROM Customers
// WHERE CustomerName LIKE 'a%' OR ContactName LIKE 'a%';
    let query = `select * from tool where tool_name LIKE ? OR contact_name LIKE ?;`

    con.query(query, [searchTerm, searchTerm], (error, result) => {
        if(error)
            console.log(error)
        else{
            console.log(result)
            res.send(result)
        }
            
    })
}

module.exports = searchTool;
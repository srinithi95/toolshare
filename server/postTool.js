const mysql = require ('mysql');

const con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"qwe123",
    database:"toolshare"
})

const postTool = (req, res) => {
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected !!")
    });

    let toolName = req.body.toolData.toolName;
    let price = req.body.toolData.price;
    let availability = req.body.toolData.availability;
    let description = req.body.toolData.description;

    let make = req.body.toolData.make;
    let condition = req.body.toolData.condition;
    let modelName = req.body.toolData.modelName;
    let suggestedProject = req.body.toolData.suggestedProject;

    let email = req.body.toolData.email;
    let contactNumber = req.body.toolData.contactNumber;
    let contactName = req.body.toolData.contactName;
    let address = req.body.toolData.address;
    let city = req.body.toolData.city;
    let state = req.body.toolData.state;
    let zipcode = req.body.toolData.zipcode;

    let query = `insert into tool (tool_name, price, availability, description, make, model_name, suggested_project, email, contact_number, contact_name, address, city, state, zipcode, tool_condition) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`

    con.query(query, [toolName, price, availability, description, make, modelName, suggestedProject, email, contactNumber, contactName, address, city, state, zipcode, condition])
    console.log("in post tool", req.body.toolData);
    res.send("Data received");
}

module.exports = postTool;
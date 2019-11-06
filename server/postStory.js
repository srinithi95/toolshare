const mysql = require ('mysql');

const con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"test"
})

const postStory = (req, res) => {
    // console.log("IN teh poststriy")
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected !!")
    });

    console.log("poststory server");
    // const {projectTitle} = req.body.storyData;
    // console.log(projectTitle);
    console.log(req.body.storyData);
    res.send("Data received");   
}

module.exports = postStory;
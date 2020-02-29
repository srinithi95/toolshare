const mysql = require ('mysql');
const multer = require('multer');
const upload = multer({dest: '/public/uploaditems'});

const con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"qwe123",
    database:"toolshare"
})

const postStory = (req, res) => {
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected !!")
    });

    console.log("poststory server, storyData is", req.body.storyData);
    let postingTitle = req.body.storyData.postingTitle;
    let description = req.body.storyData.description;
    let tools = req.body.storyData.tools;
    let materials = req.body.storyData.materials;
    let category = req.body.storyData.category;
    let tag = req.body.storyData.tag;

    let query = `insert into story (description, tool, material, category, tag, posting_title) values (?, ?, ?, ?, ?, ?);`
    con.query(query,[description, tools, materials, category, tag, postingTitle]);
    res.send("response from post story");
}

module.exports = postStory;
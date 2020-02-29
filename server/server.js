const express = require("express");
const app = express();
const postStory = require("./postStory.js");
const registerUser = require("./registerUser.js");
const postTool = require("./postTool");
const Login = require("./Login.js");
const getStory = require("./getStory.js");
const getTool = require("./getTool.js");
const searchStory = require("./searchStory.js");
const searchTool = require("./searchTool.js");
app.use(express.json());


app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

//submit story endpoint
app.post("/postStory", postStory);

//register user endpoint
app.post("/registerUser", registerUser);

//auth service
app.post("/auth", Login);

app.post("/postTool",postTool);

app.get("/getStory", getStory);

app.get("/getTool", getTool);

app.post("/searchStory", searchStory);

app.post("/searchTool", searchTool);

// app.get("/", (req, res) => {
//   if (res.status(200)) {
//     res.send("Welcome to NauJavano");
//   } else if (res.status(404)) {
//     res.send({
//       status: "Error",
//       message: "Please enter a valid endpoint"
//     });
//   }
// });

// app.get("/*", (req, res) => {
//   if (res.status(404)) {
//     res.send({
//       status: "Error",
//       message: "Please enter a valid endpoint"
//     });
//   }
// });

app.listen(2305);

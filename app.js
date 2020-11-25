const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
      res.render("index.html");
});

app.get("/frontend", function(req, res){
      res.render("frontend.html");
});

app.get("/backend", function(req, res) {
    res.render("backend.html");
});

app.get("/fullstack", function(req, res) {
    res.render("fullstack.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
      console.log("Express server is running...");
});
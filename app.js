const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var faker = require('faker');

//routes
app.get("/", function(req, res){
      res.render("index.html", {fakeBrand: faker.company.companySuffix(),
      copyRights: faker.hacker.adjective()});
});

app.get("/frontend", function(req, res){
      res.render("frontend.html", {fakeInfo: faker.lorem.paragraph(),
      fakeBrand: faker.company.companySuffix(),
      copyRights: faker.hacker.adjective()});
});

app.get("/backend", function(req, res) {
    res.render("backend.html", {fakeInfo: faker.lorem.paragraph(),
    fakeBrand: faker.company.companySuffix(),
    copyRights: faker.hacker.adjective()});
});

app.get("/fullstack", function(req, res) {
    res.render("fullstack.html", {fakeInfo: faker.lorem.paragraph(),
    fakeBrand: faker.company.companySuffix(),
    copyRights: faker.hacker.adjective()});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
      console.log("Express server is running...");
});
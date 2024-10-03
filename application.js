const express = require("express");
const App = express();
const bodyParser = require("body-parser");

// Object Creation
let people = { people:[{name : "Ambika"}] };

//For res body output view we required body parser or parse application /xx-www-form-urlencoded
App.use(bodyParser.urlencoded({extended:false}));
//Parse application json
App.use(bodyParser.json);

App.get("/people", function(req, res){
    // res.send("Hello World");
    //JSON creation
    res.json(people);
    res.end();
});

App.post("/people", function(req, res){
    // res.send("Hello World");
    console.log(req.body);
    if(req.body && req.body.name){
        people.people.push({name : req.body.name});
    }
    res.json(req.params.name);
    res.end();
});

App.put("/people", function(req, res){
    // res.send("Hello World");
    //JSON creation
    res.json(people);
    res.end();
});

App.delete("/people", function(req, res){
    // res.send("Hello World");
    //JSON creation
    res.json(people);
    res.end();
});

//Pointing to specific resource/url
App.get("/people/:name", function(req, res){
    // res.send("Hello World");
    //JSON creation
    res.json(req.params.name);
    res.end();
});

App.get("/people/:name/:age", function(req, res){
    // res.send("Hello World");
    //JSON creation
    res.json(req.params.name); // for querying through url
    res.end();
});

App.listen("2000");
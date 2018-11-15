//Purpose: Creating POST, for dictionary api, to allow for client to send/add data to the dictionart with the post method
var express = require("express");

//create application instance
var app = express();

//Cross origin resource sharing(cors): returns middleware
var cors = require("cors"); //Allows for any domain to make use of the dictionary api

// BodyParser is middleware that will help us parse the data that is osted to this API. So if we post data from 
// the application, it will send data as .json, when form is filed out with POST, data will be sent to server URL-enconded
var bodyParser = require("body-parser");

//Create an array of objects/terms
var torontoSlangs =[
    {
        term: "Ahlie",
        defined: "To aggree to a statement, or to confirm a fact"
    },
    {
        term: "TheSix",
        defined: "Refering to the city of Toronto"
    },
    {
        term:"Marved",
        defined:"To describe level of hunger"
    }
];

app.use(bodyParser.json());// When we dta sent to our API as .json, we will parse that data.
app.use(bodyParser.urlencoded({extended: false}));// also use bodyParser to make sure if the body data was sent URL-encoded 

// Add custom middleware, to log each requst
app.use(function(request, response, next){
    console.log(`${request.method} ${request.url} - ${JSON.stringify(request.body)}`);
    next();
});

app.use(express.static("./public"));

app.use(cors());
//set up a get route, first arg is location, second is function to handle any request to this route
app.get("/dictionary-api", function(request, response){
    response.json(torontoSlangs);
});

// Add POST route, to handle adding data to the array, then sending back a response.
app.post("/dictionary-api", function(request, response){
    torontoSlangs.push(request.body);//push new term into array
    response.json(torontoSlangs);//response with the new array
});
// Handle delete request
app.delete("/dictionary-api/:term", function(request, response){
    torontoSlangs = torontoSlangs.filter(function(definition){
        return definition.term.toLowerCase() !== request.params.term.toLowerCase();
    });
    response.json(torontoSlangs);
});
app.listen(3000);
console.log("Express running on port 3k");

module.exports = app;
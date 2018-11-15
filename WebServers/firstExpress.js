// First Express App... Express is a framework used when trying to build more than static data
var express = require("express");
// create application instance, using the Express function
var app = express();

// Add custom middleware, to log each request 
app.use(function(request, response, next){
    // Log details about the request before returning the response
    console.log(`${request.method} request for ${request.url} `);
    next();// If we do not invoke this next function, we will never send a response back, our pplication will technically not work.
});

// Add middleware to this application, you can think of middleware as being customized plugins to add functionality to our application
app.use(express.static("./public")); // The piece of middleware that we want to use is a STATIC FILE SERVER that comes with Express
// This ^ function needs to take in the name of the dir where we would like to serve static files from.

app.listen(3000);
console.log("Express app running on port 3k");

//Export your app module, you dont need to do this for this application to run, but now you can include this app instance in other files.
module.exports= app;
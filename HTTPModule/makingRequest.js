// using the https module to make requests, we are using HTTPS rather than HTTP because its more secure
var https = require("https");
var fs = require("fs");

// in order to make a request with the http or https module you need a object literral of options
var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path:"/wiki/George_Washington",
    method: "GET"
};
// Make the request object
var req = https.request(options, function(response){
    //Details/reponse of/from this page will be concat into this variable 
    var responseBody = "";
    
    console.log("Response from server started");
    // Display details about the response/SERVER STATUS
    console.log(`Server Status: ${response.statusCode} `);// HTTP SERVER CODE
    console.log("Response Headers: %j", response.headers);

    //Make sure the stream will come in as text not binary
    response.setEncoding("UTF-8");

    // Very first time this response raises a data event, this call back function will fire
    response.once("data", function(chunk){
        // The data event represents our data streams, so each chuck of data will be passed as an arg to our callback func
        // very first chunk we are going to log it just to see what the chunk looks like
        console.log(chunk);
    });

    //For every data event, im going to add a listener on the response object for any data event
    // every event will alos pass us a chunk of data.
    response.on("data", function(chunk){
        console.log(`--chunk-- ${chunk.length}`);
        responseBody +=chunk;
    });

    // Listen for when the response has ended
    response.on("end", function(){
        // When the response is over, write all the data to a file
        //Create new file, asyncronously, errs wil be passed to the func
        fs.writeFile("george-washington.html", responseBody, function(err){
            if(err){
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});

// Wire up a listener for any errors with the request in line 13
req.on("error", function(err){
    console.log(`Problem with request: ${err.message}`);
} );
req.end();


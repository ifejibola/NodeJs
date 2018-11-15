// Node.js is JS, the lang of the web. One of the most important features is the ability to create webservers
// To create secure web server with HTTPS you will need to add a security certificate to the
// HTTPS module. Instructions found in Node.js API Documentation
// We are going to be working with HTTP module so there will be no need to add a security certificate

var http = require("http");

//Any request of this server will cause the call back function to be invoked, this is the REQUEST OBJECT
var server = http.createServer(function(request, response){
    //gives info about our user
    
    //Complete the response in this callbackFunction, 200 means successful response status code, then add headers
    response.writeHead(200, {"Content_Type":"text/html"});
    // Repond with a full html page as text, use the request object to get info about the requested url, also info on the type of request.
    response.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Build a web server|HTML Response</title>
            </head> 
            <body>
                <h1>Serving HTML</h1>
                <p>${request.url}</p>
                <p>${request.method}</p>
            </body>
        </html>
    `);

});
//Listen for incoming request for this server
// Listen for any request on this machine
server.listen(3000);

console.log("Server listening on port 3000");

/* jshint esnext: true */
var http = require("http");

http.createServer(function(request, response){

    response.writeHead(200, {"Content-Type":"text/html"});
    
    response.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Install NPM Globally</title>
            </head>
            <body>
                <h1> Web Server</h1>
                <p>Node-dev is the better option to use when running js files</p>
            </body>
        </html>
    `);
}).listen(3000);
console.log("Web Serve running at http://localhost:3000");
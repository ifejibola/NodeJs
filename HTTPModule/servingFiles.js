// One of the most important features of web servers is the ability to serve files. 

// To create a file server you will need http module and file system module.
var http = require("http");
var fs = require("fs");
// For fiel paths
var path = require("path");

//create server with call back function
http.createServer(function(request, response){
    // when a new web request comes in, log the details of that request.
    console.log(`${request.method} request for ${request.url}`);

    // forwards slash means request for home page, if home page isnt requested for
    if(request.url === "/"){
        // When  home(/) file is requested, SERVE THE FILE 
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
            response.writeHead(200, {"Content-Type":"text/html"});
            response.end(html);
        });
    }else if(request.url.match(/.html$/)){
        // Checs for file with html extention.
        //This else if block checks for any other request that is not the home page /
        var contactPath = path.join(__dirname, 'public', request.url);// Create path to directory 
        //create read stream
        var fileStream = fs.createReadStream(contactPath, "UTF-8");

        response.writeHead(200, {"Content-Type" : "text/html"});

        fileStream.pipe(response);

    } else if(request.url.match(/.jpg$/)){
        var imgPath = path.join(__dirname, 'public', request.url);// create path to img in directory
        var imgStream = fs.createReadStream(imgPath);

        response.writeHead(200, {"Content-Type":"image/jpeg"});

        imgStream.pipe(response);
    }
    else{
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.end("404 File Not Found");
    }

}).listen(3000);
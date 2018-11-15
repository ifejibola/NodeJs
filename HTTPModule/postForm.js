var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){

    if(request.method === "GET"){

        response.writeHead(200, {"Content-Type" : "text/html"});

        fs.createReadStream("./public/form.html", "UTF-8").pipe(response);// chain the pipe to read stream to response, which will stream this file to the client. 
    }else if(request.method === "POST"){
        var body = "";

        request.on("data", function(chunk){
            body+=chunk;
        });

        request.on("end", function(){
            response.writeHead(200, {"Content-Type" : "text/html"});

            response.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Form Response</title>
                    </head>
                    <body>
                        <h1> Your Form Result</h1>
                        <p>${body}</p>
                    </body>
                </html>
            `);
        })
    }
}).listen(3000);
console.log("Form server listening on port: 3k");
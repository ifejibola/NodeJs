//Socket.IO is a module that will help us to build websockets, that has its own server javaScript
// What Socket.IO does, is it falls back to long polling when websockets arent supported.

var express = require("express");
var http = require("http");
//Create express instance
var app = express();
//Create server, based on express application in order to work with socket.io
var server = http.createServer(app).listen(3000);

//Create Socket.io instance and require Socket.Io, Socket.IO is a function, and when you invoke the Socket.IO function you
//need to send it the SERVER that it should listen for incoming connections on.
var io = require("socket.io")(server);

// Make sure we are using Express static middle to serve the static files found in the public folder.
// App.use we can use to wire up express.static and this is a piece of middleware that will serve our files from the public folder.
app.use(express.static("./public"));
//Listen for incoming io connection
io.on("connection", function(socket){

    //Listen for chat event, msg will be passed as arg
    socket.on("chat", function(message){
        //broadcast msg to all connected sockets
        socket.broadcast.emit("message", message);
    });
    //When a client connects we will emit a message event. 
    socket.emit("message", "welcome to Cyber Chat");
});

console.log("Starting Socket App - http://localhost:3000");
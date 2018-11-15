// Web sockets allow for a true two way connection between the client and the server.
// Web sockets use their own protocol to send and receive messages from TCP server.

// create web socket variable 
var WebSocketServer = require("ws").Server;
// create instance of web socket server,
var wss = new WebSocketServer({ port: 3000});

//Listen for new connections
wss.on("connection", function(ws){

    //Listen for msg sent from the browser(client) to the server
    ws.on("message", function(message){
        if(message === 'exit'){
            //Leaves ws open but it closes it's clients connection 
            ws.close();
        }else{
            //If any other msg than exit is entered, all clients will see this msg in the chat.. clients is an array of all clients
            wss.clients.forEach(function(client){
                client.send(message);
            });
        }
    });
    // Send msg after client has made a connection, every client that connects to this ws will get this msg
    ws.send("Welcome to cyber chat");
});
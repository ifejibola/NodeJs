
// Create new socketinstance, instead of sending webscoket, send this io function 
// a link to where Socket.IO is running.. in webSocketsnSocketIO.js files 
var socket = io("http://localhost:3000");

socket.on("disconnect", function() {
	setTitle("Disconnected");
});

socket.on("connect", function() {
	setTitle("Connected to Cyber Chat");
});

socket.on("message", function(message) {
	printMessage(message);
});
//When user submits msg, we submit it to the dom 
document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    // When user fills up and submits a form we need to send chat event back to the server
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}
// Craate new paragrah for each msg
function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}

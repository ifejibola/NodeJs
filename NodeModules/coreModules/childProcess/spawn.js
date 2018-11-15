//using the spawn function, requrie childprocess module
var spawn = require("child_process").spawn;//spawn function

//create a variable for child process, which will be returned by spawn function
// fitst args is command you want to run in terminal
//  second args is an array of all the things i want to run after the command
var cp = spawn("node", ["alwaysTalking"]); // running alawysTalking.js file
//with the cp(child process instance) I can listen for data event on the stdout object
cp.stdout.on("data", function(data){
    // when ever we have a data event this call back function will fire, and recieve data as args
    console.log(`STDOUT: ${data.toString()}`);
});

// Another thing we can do with the child process is we can listen for when they close
// A close event will be raised on a child process when it closes
cp.on("close", function(){
    // when close event is fired it will log this msg
    console.log("Child Process has ended");
    process.exit();
});

// We can send data to the child process instance using the standard input object
setTimeout(function(){
    // will send to the child process after 4 seconds, itll be sent to the alwaysTalking.js
    cp.stdin.write("Stop")
}, 4000);
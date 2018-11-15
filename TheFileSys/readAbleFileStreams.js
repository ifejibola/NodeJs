// Readable file streams
// Purpose: Streams give us a way to asynchronously handle continuos data flows.
// Understanding how steams work will dramatically improve the way your application handles large data.
var fs = require('fs');

//Readfile with readFile from fs module this is not a stream
fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
    // This will read file and it works relatively fast but the problem is readFile waits until the entire file is read before
    // invoking the call back and passing the file contents. 
    console.log(`File read ${chatlog.length}`);
    // It also buffers the entire file in one variable. If our big data app experiences heavy traffic, readfile
    // is going to create latency and could impact our memory. So better solution might be to implement a readabale stream.
});

console.log("File Read");

//Readable file stream
var stream = fs.createReadStream("./chat.log", "UTF-8"); // With this we can start to receieve small chunks of data from 
// the chat.log 

var data = "";// Variable to concat all data chunks

// Let user know this stream has started reading our file, implement a once listener for a data event,
// the first data event will cause this call back function to run once
stream.once("data", function(){
    console.log("\n\n\n");
    console.log("Starte Reading File");
    console.log("\n\n\n");
});
// listen for data events on our file, meaning we do not have the entire file but we have a small chunck of that file
stream.on("data", function(chunk){
    // Whenever we raise a data event, display the length of each of the file chunks 
    process.stdout.write(` Chunk: ${chunk.length} |`);
    // concatnate each chunk
    data +=chunk;
});

// Set up a listener for when this stream has finished reading the entire file
stream.on("end", function(){
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length} `);
    console.log("\n\n\n");
});

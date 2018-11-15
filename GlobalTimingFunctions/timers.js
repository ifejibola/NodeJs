// Timer delay
var waitTime = 3000;

console.log("Wait for it");

//Intervals 
var currentTime = 0;
var waitInterval = 500;

//Percent waited
var percentWaited = 0;

// USING STANDARD OUT
function writeWaitingPercent(p){
    //Clears last line in the terminal
    process.stdout.clearLine();
    //Move cursor back to the start of the line
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting... ${p}`);
}

var interval = setInterval(function(){
    currentTime += waitInterval;
    // Wait time in percentage
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
    //console.log("\n\n\n");
    //Waited time In seconds
    //console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);


setTimeout(function(){
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("Done");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
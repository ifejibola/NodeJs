// Part of the child process
// spawn is made for large amounts of data like sayings while exec is made for short processes such as getting git version number it prints and ends rights there. 
// spawn continues
var sayings = [
    "You may delay, but time will not.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "Early to bed and early to rise makes a man healthy, wealthy and wise.",
    "It takes many good deeds to build a good reputation, and only one bad one",
    "By failing to prepare you are preparing to fail.",
    "Well done is better than well said."
];
//Creating an interval, so every second we are going to randomly write one of these
// sayings TO THE STANDARD OUTPUT OBJECT
var interval = setInterval(function(){
    var i = Math.floor(Math.random()* sayings.length);
    process.stdout.write(`${sayings[i]} \n`);
}, 1000);
// Wire up a listener on the standard input object to listen for a data event.
process.stdin.on('data', function(data){
    // log data that comes into this function
    console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
    //clear interval
    clearInterval(interval);
    process.exit();
});


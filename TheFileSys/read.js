// purpose: another feature of the fs module is the ability to read the contents of a file,
// We can read both text and binary 

var fs = require('fs');
var path = require('path');
// If we dont add a text econding(UTF-8) it will read file in binary
var contents = fs.readFileSync("./lib/alwaysTalking.js", "UTF-8");

console.log(contents);

// Asyncronous method of reading file
fs.readFile("./lib/alwaysTalking.js", "UTF-8", function(err, contents){
    if(err){
        console.log(err);
    }
    console.log(contents);
});

fs.readdir("./lib", function(err, files){
    //loop through the array
    files.forEach(function(fileName){
        var file = path.join(__dirname, "lib", fileName);// Full path to the file insise lib dir
        var stats = fs.statSync(file);// tells if its a file or directory syncronously
        if(stats.isFile()&& fileName !== ".DS_Store"){
            fs.readFile(file, "UTF-8", function(err, contents){
                console.log(contents);
            });
        }
    });
});
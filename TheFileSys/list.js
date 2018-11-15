// fs module can be used to list files and directorires, create files and directories, stream files,
// write files, read files, modify file permissions or just anything
// you need to be able to do with the file system.

// require fs module
var fs = require("fs");

// list conent of lib directory, this lib file is saved where this list.js file is saved
// Will print list of content of dir as an array //
var files = fs.readdirSync('./lib');// This is reading the dir syncronously (better to use at the start of programs)

console.log(files);

// Read the dir asyncronously(preffered method);
fs.readdir('./lib', function(err, files){
    if(err){
        throw err;
    }
    console.log(files);
});

console.log("Reading files...");
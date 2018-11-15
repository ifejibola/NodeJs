// Purpose: Renaming files using fs modules method rename or renameSync
var fs = require('fs');

//Rename the file project-config which is in the lib folder/dir to config.json.. errors are handled automatically
fs.renameSync("./lib/project-config.js", "./lib/config.json");

console.log("Config json file renamed");
// Rename and move notes.md 
fs.rename("./lib/notes.md", "./notes.md", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Notes.md has been renamed and moved succefully");
    }
});
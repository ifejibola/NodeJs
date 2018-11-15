// Purpose: remove files with the fs module 
var fs = require('fs');
//syncronous remove file 
try{
    fs.unlinkSync("./lib/config.json");
}catch(err){
    console.log(err);
}
//Asyncronous remove of file
fs.unlink("notes.md", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Notes.md removed");
    }
});
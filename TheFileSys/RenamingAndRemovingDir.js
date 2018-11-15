var fs = require("fs");
// Move core modules folder 
// fs.renameSync("./lib/coreModules", "./coreModules");

// console.log("Dir moved");

// Reading the dir is first step to delete a dir with contents
fs.readdirSync("./coreModules").forEach(function(fileName){

    fs.unlinkSync("./coreModules" + fileName);
})
// Remove/delete dir
fs.rmdir("./coreModules", function(err){
    if(err){
        // if file has been deleted we want to crash the program
        throw err;
    }

    console.log("coreModules removed");
    // IF FILES ARE WITHIN THE DIR.. IT WILL NOT BE DELETED THEN THROW AN ERR
});
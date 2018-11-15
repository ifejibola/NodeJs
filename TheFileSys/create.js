// Another ability of the fs module is Writing and appending files 
//Create new markdown file
var fs = require("fs");
// use string template ``
var md =`
Sample Maekdown Title
=======================

Sample subtitle
-----------------

*point 
*point 
*point

`;
// write ^ md to the file v(this is a arrow pointing down fool)
fs.writeFile("sample.md", md.trim(), function(err){
    console.log("File created.");
});
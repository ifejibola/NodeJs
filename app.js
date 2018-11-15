// gives full path to this document
console.log(process.argv);
//(Type In Terminal) node app.js --user ife -- greeting "good day sir"(type this in terminal to add user and greeting(for fun?))

function grab(flag){
    //find index of flag in the array
    var index = process.argv.indexOf(flag);
    // return the value/next variable in the array// if index is == -1 flag is not found in array, 
    // and if index is not == to -1 the flag is found in array
    return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('-- greeting');
var user = grab('--user');

// if we do not have a user or a greeting, log a msg to the console
if(!user || !greeting){
    console.log("You Blew it!");
}else{
    console.log(`Welcome ${user}, ${greeting}`);
}
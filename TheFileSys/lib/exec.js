// spawn is made for large amounts of data like sayings while exec is made for short processes such as getting git version number it prints and ends rights there. 
// spawn continues
// Purpose: Creating child process with exec
// exec(Execute) command allows us to execute external processes found in our environment
var exec = require("child_process").exec;

//Open a web page 
//exec("open https://github.com/ifejibola");
// open an application 
//exec("open -a Terminal .");

// get data from ls, then pass its data to the call back function via argument
exec("ls", function(err, stdout){
    // Error received passed as the first args, second arg is stdout from executing the ls
    if(err){
        throw err;
    }

    console.log("listing Finished");
    console.log(stdout);
});

exec("git version", function(err, stdout){
    // Error received passed as the first args, second arg is stdout from executing the ls
    if(err){
        throw err;
    }

    console.log("Git version retrieved");
    console.log(stdout);
});

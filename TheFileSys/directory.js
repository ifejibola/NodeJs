// Purpose: fs module can also be used to create directories
var fs = require('fs');
//Create dir, without validating that the dir doesnt already exist, let call back function handle error
// fs.mkdir("creatingAdir", function(err){
//     // print error, error likely to occur is creating a dir that already exist
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Directory created!");
//     }
// });



// OR VALIDATE BEFORE CALL BACKFUNCTION HANDLES THE ERROR
if(fs.existsSync("creatingAdir")){
    console.log("Directory already there");
}else{
    fs.mkdir("creatingAdir", function(err){
        // print error, error likely to occur is creating a dir that already exist
        if(err){
            console.log(err);
        }else{
            console.log("Directory created!");
        }
    });
}



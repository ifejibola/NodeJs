// Writeable streams are used to write the data chunks that are read by the Readable streams

// using fs module to Create new file and append data to new file 
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
var realPerson = {
    name: '',
    sayings: []
};

rl.question("What is the name of a real person? ", function(answer){
    realPerson.name = answer;
    //
    // TODO : CREATE  a new Markdown file
    //

    //Create write stream
    var stream = fs.createWriteStream(realPerson.name + ".md");
    //write to stream
    stream.write(`${realPerson.name}\n===============\n\n`);
    //use SYNCRONOUS method because there will be only one user, and need to create the file before you can append to the file
     fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n===============\n\n`);

    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying){
        //
        // TODO: Append Sayings to that markdown file with fs module appendFile // better to use streams
        //
        // fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`, function(err){
        //     console.log(saying);
        // });

        if (saying.toLowerCase().trim() === 'exit'){
            // close/end the write stream
            stream.close();
            rl.close();
        }else{
            realPerson.sayings.push(saying.trim());
            // Append to FILE WITH STREAM module write
            stream.write(`* ${saying.trim()} \n`);

            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
            rl.prompt();
        }
    });
} );

rl.on("close", function(){
    console.log(`${realPerson.sayings}`);
});
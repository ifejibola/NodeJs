//Purpose: using fs module to Create new file and append data to new file 
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
    //use SYNCRONOUS method because there will be only one user, and need to create the file before you can append to the file
     fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n===============\n\n`);

    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying){
        realPerson.sayings.push(saying.trim());
        //
        // TODO: Append Sayings to that markdown file
        //
        fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`, function(err){
            console.log(saying);
        });

        if (saying.toLowerCase().trim() === 'exit'){
            rl.close();
        }else{
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
            rl.prompt();
        }

    });
} );
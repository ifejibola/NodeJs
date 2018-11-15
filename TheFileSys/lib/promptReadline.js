//Readline : a modolue that lets us ask questions from the user
var readline = require('readline');
// js object
var realPerson={
    name:'',
    sayings:[] // empty array 
};
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is the name of a real person? ", function(answer){
    realPerson.name = answer;
    //set the prompt
    rl.setPrompt(`What would ${realPerson.name} say? `);
    //display the prompt
    rl.prompt();
    // To listen for new answers we listen for new lines
    rl.on('line', function(saying){
        // This event will fire when a user submits an answer, answer will be submited to this function.
        realPerson.sayings.push(saying.trim());
        if(saying.toLowerCase().trim()=== 'exit'){
            rl.close();
        }else{
            // add another question
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);        
            //display prompt
            rl.prompt();
        }
    });
});


// listener for close event
rl.on('close', function(){
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});
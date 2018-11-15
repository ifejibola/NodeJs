// console.log uses standard output to log msg to the console, and also controls line spacing to give in new line
// PROCCESS STANDARD OUTPUT will write Strings but will not give you a new line automatically
process.stdout.write("Hello ");

process.stdout.write("World \n\n\n\n");

// Array of questions
var questions = ["What is your name? ", "What is your fav hobby?",
 "What is your preferred programming language?"];
// Answers will be stored in an array
 var answers = [];

 function ask(i){
     process.stdout.write(`\n\n\n\n ${questions[i]}`);
     process.stdout.write(` > `);
 }

 ask(0);

// Add listener to get answers to our question// this code is to echo the data we are getting from the terminal, not to save them 
// process.stdin.on('data', function(data){
//     //At this point it is the first time we are using NODE.JS asynchronously
//     // we are wating for some input and when we add that input it will be handled with that asynchronous callback
//     process.stdout.write('\n' + data.toString().trim()+ '\n');
// });

// Add listener to get answers to our question// THIS CODE IS TO SAVE THE ANSWERS AND ASK THE NEXT QUESTION, INSTEAD OF ECHOING THE DATA
process.stdin.on('data', function(data){
    //Save answer to current array index
    answers.push(data.toString().trim());
    //Ask next question, as long as theres questions to ask/(length of questions)
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }

});
// Before exit is invoked 
process.on('exit', function(){
    process.stdout.write("\n\n\n\n");

    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} late`);

    process.stdout.write("\n\n\n\n");
});
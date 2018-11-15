        // Handling events with EventEmitter
// Event emitter is part of the event module
var events = require('events');

//event constructor /custom event
var emitter = new events.EventEmitter();
// new instance of emitter, you can name your custom event w.e you want lets name this customerEvent
emitter.on('customEvent', function(msg, status){
    //our custom event is going to pass a msg and status to this function as arguments.
    // so when our custom event occurs, this callback function will be invoked ASYNCRONOUSLY.
    console.log(`${status}: ${msg}`);
});

// emit your customer event
emitter.emit('customEvent', "Hello World", 200);

// OR
//Pull event emitter out of the events module and also set as the constructor
var EventEmitter = require('events').EventEmitter;
// create an object
// We want the Person object to inherit the EventEmitter using the util module
var util = require('util');
var Person = function(name){
    this.name = name;
};
util.inherits(Person, EventEmitter);
var ben = new Person("Ben Franklin");
ben.on('speak', function(said){
    console.log(`${this.name} says ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");
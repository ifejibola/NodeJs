// Exporting custom modules
// We have been loading external modules with the require function.The requrie function is part of the common JS module pattern,
// but it only represents half of the pattern, the half that loads the modules.
// The other half of the pattern is the module.exports, or the mechanism that we can use to make our modules consumables

// require Person  from eCustomMod2.js file which is available for exports
var Person = require('./eCustomMod2');

//create Person object/instance of a person
var george = new Person("George Washigton");
//set listener(on), and fall back function ,function(){}
george.on('speak', function(said){
    console.log(`${this.name} -> ${said}`);
});
var ben = new Person("Ben Franklin");
ben.on('speak', function(said){
    console.log(`${this.name} says ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company.");
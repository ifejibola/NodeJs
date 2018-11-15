// USED FOR : exportingCustomModules.JS 
var EventEmitter = require('events').EventEmitter;
// create an object
// We want the Person object to inherit the EventEmitter using the util module
var util = require('util');
var Person = function(name){
    this.name = name;
};
util.inherits(Person, EventEmitter);

//
// To make this module cosumable, it can now be used by exportingCustomModules.js
module.exports = Person; 
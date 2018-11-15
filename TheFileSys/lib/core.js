//Require function is globally available
// Requre fucntion can be used to load path module/modules

// Path is a core module, here it is being loaded with require
var path = require('path');

// Use path module to pluck the base file name from a full path.
console.log(path.basename(__filename));

// use path module to create path strings.
var dirUploads = path.join(__dirname, 'www', 'files', 'uplaods');
console.log(dirUploads);

//Util module pulled with require
var util = require('util');

// Use util module to pluck the base file name from a full path, but also adds date and time stamp.
util.log(path.basename(__filename));

// use util module to create path strings but also adds date and time stamp.
var dirUploads = path.join(__dirname, 'www', 'files', 'uplaods');
util.log(dirUploads);

//v8 module : Used to get info on memory
var v8 = require('v8');
util.log(v8.getHeapStatistics());
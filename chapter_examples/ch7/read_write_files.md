This section relies on the FS module to read, write, and close files

Opening a file

basic structure of all file opening will be:

var fs = require('fs');
fs.open('/path/to/file', 'r', function(err, fd) {
	//got fd file descirptor
});

Detailed example in read.js

Write example is in write.js

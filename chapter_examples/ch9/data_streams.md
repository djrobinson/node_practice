Waiting for Data

Streams send data in chunks, and by listening to the 'data' even tyou can be notified upon the delivery of each chunk.

var readable sttream = ...
//This is where you would use setEncoding() if desired
readable stream.on('data', function(data) {
	//data is a buffer;
	console.log('got this data: ', data)
});

Can set the encoding of a stream using stream.setEncoding() prior to oopening the stream

Pausing a stream:
stream.pause();

Determining the end of a string:

readable stream. on('end', function() {
	console.log('the stream has ended');
});

//Writable streams:

var writable_stream = ...;
writable_stream.write('this is a UTF-8 string');

//you can also pass a buffer to the writable stream:
var buffer = new Bufffer('this is a bufffer with some string');
writable_stream.write(buffer)

//you can also specify an alternative encoding:
//The encoded number is not the correct #, for reference
writable_stream.write('7e7d8a97d668s55e8', 'base64')

//the code below will create a read stream from a specified file.
var fs = require('fs');
var rs = fs. createReadStream('/path/to/file');

//Networking streams:

A client TCP connection is both a writable and readable stream, and is also a server connection
An HTTP requrest object is a readable stream, while an HTTP response object is a writabe stream.

//The slow client problem summary:




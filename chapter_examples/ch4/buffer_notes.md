Javascript was initiall y only deesigned to handle HTML documents, so it was only developed with Strings in mind.  Javascript doesn't have a byte type, structured type, or byte arrays.  It only has strings.  Node needs to go beyond that since node needs to talk to databases, upload images, and upload files of different types, so it needs a way to deal with these binary-handling tasks.  Node uses a binary Buffer pseudo-class to handle these duties.

This is only for dealing with binary data, and I'm not sure all of the Use Cases yet, so I'm not going to show too much here.  Here's how you can create and inpect a buffer

var buf = new Buffer('my buffer content');
//access the 10th position
console.log(buf[10]); -> 99



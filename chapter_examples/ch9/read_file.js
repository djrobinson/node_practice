var fs = require('fs');
var path = './file.txt';


var rs =	fs.createReadStream(path, {encoding: 'utf8' });
rs.on('data', console.log);




//sets up the server
var net = require('net');

var server = net.createServer();

//stores all client sockets
var sockets = [];

//Accept a new connection
server.on('connection', function(socket) {
	
	console.log('Got a new connection');
	
	sockets.push(socket);
	
	//Reads data from the connection
	socket.on('data', function(data) {
		console.log('Got data: ' + data);
		
		//broadcast data to every other socket
		sockets.forEach(function(otherSocket) {
			if (otherSocket !== socket) {
				otherSocket.write(data);
			}
		});
	});
	
	//close specific socket
	socket.on('close', function() {
		console.log('connection closed');
		var index = sockets.indexOf(socket);
		sockets.splice(index, 1);
	
	});
	
	server.on('error', function(err) {
		console.log('Server error: ', err.message);
	});
	
	server.on('close', function() {
		console.log('Server closed');
	});
});

server.listen(4001);

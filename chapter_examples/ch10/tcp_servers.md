Creatign a TCP server:

uSE THE 'net' module to create TCP Servers:

require('net').createServer(function(socket) {
	//new connection
	
	socket.on('data', function(data) {
		//got data
	});
	
	socket.on('end',function(data) {
		//close connection
	});
	socket.write('Some String');

}).listen(4001);

the net.Server object is also an event emitter an dcan listen to events during its lifecycle.  It also emits the following events:

'listening' = server is listening on the specified port and address
'connection' = new connection has been established.. can bind to this even tby passinga function to net.createServer()
'close' = server has been closed, port is not bound
'error' = when error occurs at hte server level

//Lifecycle of a TCP sever

see example

//The Socket object:
When you extablish a conneciton you are also handed the socket object that you can use to send and receive data from the client.   It is both a read adn write stream.  See the echo_tcp.js as an example.





var spawn = require('child_process').spawn;

//Spawn the child with a node process executing the plus_one app
var child = spawn('node', ['06_plus_one.js']);

//Call this function every 1 sec
setInterval(function() {
	
	//create a random number smaller than 10.000
	var number = Math.floor(Math.random() * 10000);
	
	//Send that number to the child process:
	child.stdin.write(number + "\n");
	
	//Get the response from the childprocess and print it
	child.stdout.once('data', function(data) {
		console.log('child replied to ' + number + ' with: ' + data);
	});
},1000);


child.sterr.on('data', function(data) {
	process.stdout.write(data);
});

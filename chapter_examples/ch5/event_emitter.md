Asynchronous programming does not use return values to indicate function completion.  Instead, it uses the continuation passing style of programming. In CPS, a funciton will take an extra argument that is antoher funciton.  This will explicitly change control from the completing funciton over to the next function.

Javascript uses a standard event emitter callback pattern where you pass a callback as a function argument that will be triggered when the parent function completes.  An event emitter oject that emits events, while an event listener binds to the emitter and listens for specific events.

var req = http.request(options, function(response) {
	response.on("data", function(data) {
		console.log("Some data from the response", data);
	});
	
	response.on("end", function() {
		console.log("response ended");
	});
});
req.end();

this event listener makes an http request to a remote server.  The inline anonymous callback function is invoked once the response is made available from the http request.  It passes a response object (either a "data" event or an "end" event) which will then invoke the corresponsding function.

Event Emmiter API

any opject implementing the event emitter pattern implements a set of methods:

.addListener & .on
.once (attaches evt listener to an event typ that will be called at most once)
.removeEventlistener
.removeAllEventListeners - don't use unless completely sure

on example:

readStream.on("data", function(data) {
	console.log("got data from file read stream: %j", data);
});

Binding multiples

you can add multiople listeners to the same event type.  It will call them in the order they are registered, and prior listeners errors will block the execution of other listeners for the same event that are registered later.

.removeListener() example:

function receiveData(data) {
	console.log("got data from file read stream: %j", data);
}	
readStream.on("data", receiveData);

readStream.removeListener("data", receiveData);

.once example

worth using if you know an event will happen at most once or if you are only interested in the first occurance of an event type.

function receiveData(data) {
	console.log("got data from file read stream: %j", data);
}
readStream.once("data", receiveData);

Creating an event emitter:

In order to use node's event emitter patter, you need to inherit from EventEmitter

util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyClass = function() {

}

util.inherits(MyClass, EventEmitter);

Now instances of MyClass can emit events using the structure of this.emit("custom event");

Here's one that will emit a tick event every second:

var util = require('util'),
EventEmitter = require('events').EventEmitter;

var Ticker = function() {
	var self = this;
	setInterval(function() {
		self.emit('tick);
	}, 1000);
};
util.inherits(Ticker, EventEmitter

...and here is the corresponding listener:

var ticker = new Ticker();
ticker.on("tick", function(){
	console.log("tick");
});


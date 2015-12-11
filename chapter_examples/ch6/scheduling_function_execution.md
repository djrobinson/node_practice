Javascript has 2 built in functions that allow you to schedule the execution of your program.  setTimeout will defer execution for a given period of time before the execution of a funciton, and setInterval will repetitively exectue a function spaced over a given time interval. clearTimeout will also cancel the function scheduled by setTimeout.

Node also gives a new way to defer funcitons based of the node event loop.  They have a global process object that can call the .nexttick funciton to defer execution until the next loop.  This is very useful for delaying non-crucial tasks.

timeout example

var timeout_ms = 2000;
var timeout = setTimeout(function() {
	 console.log("timed out!");
}, timeout_ms);

setInterval example:

var period = 1000;
setInterval(function() {
	console.log("tick");
}, period);

process.nextTick example:

process.nextTick(function(){
	my_expensive_computation_function();
});

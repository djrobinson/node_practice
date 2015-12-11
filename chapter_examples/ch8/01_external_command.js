//import the exec function defined on the child_process module
var exec = require('child_process').exec;
//launch the command "cat *.js | wc -l"
exec('cat *.js | wc -l', function(err, stdout, stderr) {
	//the command exited or the launching failed error
	if (err) {
		//we had a error
		console.log('child process exited with error code', err.code);
		return;
	}
	console.log(stdout);
});

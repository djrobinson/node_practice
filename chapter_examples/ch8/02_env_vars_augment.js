var env = process.env,
	varName,
	envCopy = {},
	exec = require('child_process').exec;
// Copy process.env into envCopy
for (varName in env) {
	envCopy[varName] = env[varName];
}

//Assign customer variables
envCopy['CUSTOMER ENV VAR'] = 'some value';

//Execute a command with process.env and my custom env vars
exec('ls -la', { env: envCopy }, function(err, stdout, stderr) {
	if (err) { throw err; }
		console.log('stdout:', stdout);
		console.log('stderr:', stderr);
});

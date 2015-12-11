//Import the spawn function defined in child_process
var spawn = require('child_process').spawn;

//Launch a child process witha "tail -f /var/log/system.log" command
var child = spawn('tail', ['-f', './system.log']);

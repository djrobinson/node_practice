Javascript has one problems when it is used in a browser.  When JS files are loaded, all of its variables and functions are injected into the global namespace, meaning they are shared by all other scripts.  This can obviously lead to security issues and naming conflicts.

Node.js uses the CommonJS modules standard, and breaks each module out into its own context. To use any moudle you need to use the require function like so:

var module  = require('module_name');

Which will load either a core module or a module installed by NPM. 

In order to create a module and expose it to other modules for usage, you need to uuse the module.exports function like so:

function Circle(x, y, r) {

}

module.exports = Circle;

Loading file modules will take on the following formats depending upon what type of file you want loaded.

//absolute file structure. You can use '.' for current directory and you do not need to include the .js extension

var myModule = require('./my_module');

//Loading a core module

var http = require('http');

//Loading something from node_modules folder (meaning it was installed by npm via package.json)
//If node sees that this is not a relative path it will then look in the node_modules folder as a starting point

var myModule = require('myModule.js');



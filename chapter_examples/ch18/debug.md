You can use console.logs to debug chunks of code

A more in depth method would be Node's built in debugger.  The JS V* vm exports a debuggin interface used by node.  

You can use node debug buggy_app.js
You can watch the value of a variable by using the 'watch' option
Step to the next call by using 'next'

The node inspector is a full UI view of your app.  When you open the app at localhost 8080, you can set breakpoints in your app that will freeze the app while running an display the current context for debugging much like 'debug'



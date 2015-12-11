var request = require('request');
var inspect = require('util').inspect;
//can also encode as json in other example in book
body = {
	a: 1,
	b: 2
};

var options = {
	url: 'http://localhost:4001/print/body',
	form: body
};

request(options, function(err, res, body) {
	if (err) { throw err; }
	console.log(inspect({
		res: {
			statusCode: res.statusCode,
			headers: res.headers
		},
		body: JSON.parse(body)
	}))
});

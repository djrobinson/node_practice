function printA() {
	console.log('A');
}

var circum = function(diameter) {
	var circum = diameter * Math.PI;
	console.log(circum);
}

module.exports.circum = circum;
module.exports.printA = printA;

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//o código a seguir é que irá para o Bee Crowd
//var A = parseInt(lines.shift());
//var B = parseInt(lines.shift());

var n = 3.14159 
var R = parseInt(lines[0])

var A = n * R * R
A = A.toFixed(4)
console.log("A=", A)
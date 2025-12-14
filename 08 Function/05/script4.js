var a = 15;

function value(){
	var b = 25;
	console.log(b);  // Variable Local
}

value();

console.log(a);  // Variable Global
console.log(b);  // Variable Local

var a = 1;

function value(){
	var b = 2;
	console.log(b);  // Variable Local
}

value();

console.log(a);  // Variable Global
console.log(b);  // Variable Local
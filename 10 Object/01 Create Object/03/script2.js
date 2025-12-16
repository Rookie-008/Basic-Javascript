// 1. Create Object
var a = 35;
var b = 40;
console.log(this.a);
console.log(window.b);


// 2. Object Literal 
var object = {price : 35, name : 'Kacang Telor'};
object.menu = function() {
	console.log(this);
	// console.log('Kacang Bawang');
}

object.menu();


// 3. Function Declaration
function cemilan() {
	// console.log(this);
	console.log('Kerupuk Pedas');
}

// window.cemilan();
this.cemilan();


// 4. Constructor
function Minuman() {
	console.log(this);
	console.log("Jus Alpukat");
}

var menu1 = new Minuman();
// var menu2 = new Minuman();

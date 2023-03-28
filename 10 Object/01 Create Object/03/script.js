// 1. Create Object
var a = 5;
var b = 10;
console.log(this.a);
console.log(window.b);


// 2. Object Literal 
var object = {price : 5, name : 'Rujak'};
object.menu = function() {
	console.log(this);
	// console.log('Hello');
}

object.menu();


// 3. Function Declaration
function hello() {
	// console.log(this);
	console.log('Hello');
}

// window.hello();
this.hello();


// 4. Constructor
function Bakso() {
	console.log(this);
	console.log("Tenis");
}

var menu1 = new Bakso();
// var menu2 = new Bakso();



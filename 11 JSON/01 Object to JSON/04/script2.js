// Simple JSON
var menu = {
	name : "Charlie Russo",
	address : "Garden Street",
	point : [5,15,25,35,45,55,65,75]
};

// Simple Object to JSON
// console.log(JSON.stringify(menu, null, 5));
console.log(JSON.stringify(menu, null, '->'));


// Access Array Values
console.log(JSON.stringify(menu.point[5]));

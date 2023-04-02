// Simple JSON
var menu = {
	name : "A",
	address : "forest",
	point : [10,20,30]
};

// Simple Object to JSON
// console.log(JSON.stringify(menu, null, 3));
console.log(JSON.stringify(menu, null, '->'));


// Access Array Values
console.log(JSON.stringify(menu.point[2]));
// Simple JSON
var menu = {
	name : "A",
	address : "forest",
	point : [10,20,30,40,50]
};

// Simple Object to JSON
console.log(JSON.stringify(menu));


// Loop Access Array Values
let pointMenu = "";

for (let a = 0; a < menu.point.length; a++){
	pointMenu += menu.point[a] + ", ";
}

console.log(JSON.stringify(menu.point));
console.log(JSON.stringify(menu.point[3]));

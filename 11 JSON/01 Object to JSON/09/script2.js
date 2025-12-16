// Simple JSON
var data = {
	name : "Kentaro",
	address : "Garden Street",
	point : [15,25,35,45,55]
};

// Simple Object to JSON
console.log(JSON.stringify(data));

// Loop Access Array Values
let pointData = "";

for (let a in data.point){
	pointData += data.point[a] + ", ";
}

console.log(JSON.stringify(data.point));
console.log(JSON.stringify(data.point[3]));

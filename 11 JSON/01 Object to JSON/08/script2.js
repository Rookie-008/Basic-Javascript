// Simple JSON
var employee = {
	name : "Kentaro",
	address : "Garden Street",
	point : [5,15,25,35,45,55]
};

// Simple Object to JSON
console.log(JSON.stringify(employee));


// Loop Access Array Values
let pointEmployee = "";

for (let a = 0; a < employee.point.length; a++){
	pointEmployee += employee.point[a] + ", ";
}

console.log(JSON.stringify(employee.point));
console.log(JSON.stringify(employee.point[3]));

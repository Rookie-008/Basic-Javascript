// Simple JSON
var employee = {
	name : "Bruce Lee",
	address : "Garden Street",
	point : [15,25,35,45,55]
};

// Simple Object to JSON
console.log(JSON.stringify(employee));

// Loop Access Array Values
let pointEmployee = "";

for (let a in employee.point){
	pointEmployee += employee.point[a] + ", ";
}

console.log(JSON.stringify(employee.point));
console.log(JSON.stringify(employee.point[3]));

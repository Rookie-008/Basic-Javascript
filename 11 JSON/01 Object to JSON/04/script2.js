// Simple JSON
var employee = {
	name : "Bruce Lee",
	address : "Garden Street",
	point : [5,15,25,35,45,55,65,75]
};

// Simple Object to JSON
// console.log(JSON.stringify(employee, null, 5));
console.log(JSON.stringify(employee, null, '->'));


// Access Array Values
console.log(JSON.stringify(employee.point[5]));

alert(".. n1 + n2 Total 10 ..")

var a = prompt("Insert Number1 (0 - 10) :");
var b = prompt("Insert Number2 (0 - 10) :");

var total = parseInt(a) + parseInt(b);

if (total === 10) {
	alert ('Excellent.!!!! ');
} else if (total < 10) {
	alert ('Whooopssyyy.... ');
} else {
	alert('INVALID..! Range number ( 0 - 10 )');
}
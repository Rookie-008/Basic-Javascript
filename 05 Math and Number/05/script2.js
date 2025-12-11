var a = 24.5835;
var b = prompt("Insert Number : ");

var number = a.toPrecision(b);

if ( number == 25) {
	document.write("Precision");
} else {
	document.write("Not Precision");
}

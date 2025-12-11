var a = "LIFE IS WONDERFUL";
var b = "LIFE IS SO GOOD";

var string = a.concat(", " ,b);
// var string = a.concat(", " , "BE NICE BE GOOD");

if (string === a + ", " + b) {
	document.write(string);
} else {
	document.write("EROR");
}

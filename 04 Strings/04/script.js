var a = "Hello ABC";
var b = "ABCDE"

// var string = a.replace(/ABC/, b);

var string = a.replace(/ABC/, "Hello");


if (string !== "Hello ABCDE") {
	document.write("String Replace");
} else {
	document.write(string);
}



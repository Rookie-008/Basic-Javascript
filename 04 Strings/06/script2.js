var a = "LIFE IS WONDERFUL";
var b = "LIFE IS SO GOOD";

var string1 = a.substring(8, 16);
var string2 = b.substring(8, 14);

// var result = string1.concat(" ",string2) ;
var result = string1.concat(" ", "POWERFUL") ;

if ( result === string1 + " " + string2 ) {
	document.write(string1.concat(" && ", string2));
} else {
	document.write(string1.concat(" || ", string2));
}

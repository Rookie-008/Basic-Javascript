var a = "Pahit Jangan Cepat Dibuang";
var b = "Manis Jangan Cepat Ditelan";

var string1 = a.substring(0, 5);
var string2 = b.substring(0, 5);

// var result = string1.concat(" ",string2) ;
var result = string1.concat(" ", "Manisan") ;

if ( result === string1 + " " + string2 ) {
	document.write(string1.concat(" && ", string2));
} else {
	document.write(string1.concat(" || ", string2));
}


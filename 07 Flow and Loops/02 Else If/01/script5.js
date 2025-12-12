alert(".. n1 + n2 + n3 + n4 + n5 Total 50 ..")

var a = prompt("Insert Number1 (0 - 50) :");
var b = prompt("Insert Number2 (0 - 50) :");
var c = prompt("Insert Number3 (0 - 50) :");
var d = prompt("Insert Number4 (0 - 50) :");
var e = prompt("Insert Number5 (0 - 50) :");

var total = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) + parseInt(b) - parseInt(c) + parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) + parseInt(c) - parseInt(d) + parseInt(e);
//var total = parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) + parseInt(d) + parseInt(e);

if (total === 50) {
	alert ('Oh My God.!!!! ');
} else if (total < 50) {
	alert ('Whooppsssyy.... ');
} else {
	alert('INVALID..! Range number ( 0 - 50 )');
}

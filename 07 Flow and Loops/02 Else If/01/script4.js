alert(".. n1 + n2 + n3 + n4 + n5 Total 40 ..")

var a = prompt("Insert Number1 (0 - 40) :");
var b = prompt("Insert Number2 (0 - 40) :");
var c = prompt("Insert Number3 (0 - 40) :");
var d = prompt("Insert Number4 (0 - 40) :");
var e = prompt("Insert Number5 (0 - 40) :");

var total = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) + parseInt(b) - parseInt(c) + parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) + parseInt(c) - parseInt(d) + parseInt(e);
//var total = parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) + parseInt(d) + parseInt(e);

if (total === 40) {
	alert ('Amazing.!!!! ');
} else if (total < 40) {
	alert ('Oooopsss.... ');
} else {
	alert('INVALID..! Range number ( 0 - 40 )');
}

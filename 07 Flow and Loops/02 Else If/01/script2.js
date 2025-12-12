alert(".. n1 + n2 + n3 + n4 + n5 Total 20 ..")

var a = prompt("Insert Number1 (0 - 20) :");
var b = prompt("Insert Number2 (0 - 20) :");
var c = prompt("Insert Number3 (0 - 20) :");
var d = prompt("Insert Number4 (0 - 20) :");
var e = prompt("Insert Number5 (0 - 20) :");

var total = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) + parseInt(b) - parseInt(c) + parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) + parseInt(c) - parseInt(d) + parseInt(e);
//var total = parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) + parseInt(d) + parseInt(e);

if (total === 20) {
	alert ('Oh Yess.!!!! ');
} else if (total < 20) {
	alert ('Oh No.... ');
} else {
	alert('INVALID..! Range number ( 0 - 20 )');
}

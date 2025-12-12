alert(".. n1 + n2 + n3 + n4 + n5 Total 30 ..")

var a = prompt("Insert Number1 (0 - 30) :");
var b = prompt("Insert Number2 (0 - 30) :");
var c = prompt("Insert Number3 (0 - 30) :");
var d = prompt("Insert Number4 (0 - 30) :");
var e = prompt("Insert Number5 (0 - 30) :");

var total = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) + parseInt(b) - parseInt(c) + parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) + parseInt(c) - parseInt(d) + parseInt(e);
//var total = parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d) - parseInt(e);
//var total = parseInt(a) - parseInt(b) - parseInt(c) + parseInt(d) + parseInt(e);

if (total === 30) {
	alert ('Wow.. Wonderful!!!! ');
} else if (total < 30) {
	alert ('Thats Good.... ');
} else {
	alert('INVALID..! Range number ( 0 - 30 )');
}

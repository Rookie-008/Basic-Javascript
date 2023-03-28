var string = prompt('Insert String : ');
var a = confirm('Are you sure want to Access String?');

if (a === true) {
	alert(string);
} else {
	alert('Cant Access String, Progress Canceled');
}
var a = prompt('Insert Number :');

var total = parseInt(a) + parseInt(5);

if (total % 2 === 0) {
	alert(total + ' -> Not Carry')
} else {
	alert(total + ' -> Carry')
}
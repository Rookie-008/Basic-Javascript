var a = prompt('Insert Number :');

var total = parseInt(a) + parseInt(10);

if (total % 5 === 0) {
	alert(total + ' -> Not Carry')
} else {
	alert(total + ' -> Carry')
}

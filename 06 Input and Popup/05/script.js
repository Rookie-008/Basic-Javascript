alert('...WELCOME HOME...');
var condition = true;

while(condition === true) {
	var string = prompt('Insert String : ');
	alert('Hello ' + string);

	condition = confirm('Insert another String?');
}

alert('Thank You');
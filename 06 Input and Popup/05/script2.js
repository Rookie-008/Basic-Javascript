alert('...BE NICE BE GOOD...');
var condition = true;

while(condition === true) {
	var string = prompt('Insert String : ');
	alert('Wonderful Life ' + string);

	condition = confirm('Insert another String?');
}

alert('Thank You');

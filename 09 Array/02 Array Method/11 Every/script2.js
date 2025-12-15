var minuman = [

	{name : "Cokelat Hangat", point : "90"},
	{name : "Limun Hangat", point : "70"},
	{name : "Cendol", point : "100"},
	{name : "Jahe Hangat", point : "60"},
	{name : "Jus Alpukat", point : "50"}

];

var showArray = minuman.every(function(element, index, array){
	if (index === 0){
		return true;
	} else {
		return (element.point === array[index - 1].point);
	}
});

console.log(showArray);

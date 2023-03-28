var array = [

	{name : "A", point : "100"},
	{name : "B", point : "100"},
	{name : "C", point : "100"},
	{name : "D", point : "50"}

];

var showArray = array.every(function(element, index, array){
	if (index === 0){
		return true;
	} else {
		return (element.point === array[index - 1].point);
	}
});

console.log(showArray);

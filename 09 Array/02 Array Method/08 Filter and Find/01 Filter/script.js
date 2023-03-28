var array = [0,4,1,5,7,2,6,3,9,8];
var showArray = array.filter(function(x) {
	return x > 5;
});

console.log(showArray.join(' - '));

// Note :
// filter -> Creates a new array from calling a function for every array element
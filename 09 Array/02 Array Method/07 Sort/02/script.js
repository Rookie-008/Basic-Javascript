var array = [0,4,1,5,7,2,6,3,9,8];

console.log(array.join(' - '));

array.sort(function(a, b){
	return a - b;
});

console.log(array.join(' - '));

// Note :
// sort -> sort element of array
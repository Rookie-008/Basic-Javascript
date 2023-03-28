var array1 = [0,1,2,3,4,5,6,7,8,9];
var array2 = ['A','B','C','D','E'];

// | 1 | For
// for (var i = 0; i < a.length; i++){
// 	console.log(a[i]);
// }


// | 2 | Foreach
var showArray = function(a) {
	console.log(a);
};

array1.forEach(showArray);
array2.forEach(showArray);


// Note :
// foreach -> Looping Array
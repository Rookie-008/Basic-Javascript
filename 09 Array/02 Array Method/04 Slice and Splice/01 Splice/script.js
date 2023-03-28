var array = ['A', 'B', 'C', 'D', 'E'];

array.splice(1, 0, 'abc');
array.splice(1, 2, 'abcd', 'ABC');
array.splice(0, 1, '123', '456');

console.log(array.join(' - '));


// Note :
// Splice -> Add or Remove Array Elements
// array.splice(index, addOrRemoveIndexItem, item1,...,item);
var array = ['A', 'B', 'C', 'D', 'E'];
// array.unshift('F');
array.shift();
array.shift();
array.shift();
array.unshift('F');

console.log(array.join(' - '));


// NOTE :
// unshift -> Add new Element on beginning array 
// shift  -> Remove Element from beginning array
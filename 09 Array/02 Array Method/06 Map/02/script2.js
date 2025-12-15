var id = [0,1,2,3,4,5,6,7,8,9];
var cemilan = ['Basreng','Kacang Atom','Seblak','Makaroni','Kacang Bawang','Kacang Telur','Kerupuk Kulit','Mie Lidi','Kuping Gajah','Sakura Pedas'];

id.map(function(element, indeks) {
	console.log('Indeks ' + (indeks + 1) + ' -> ' + element * 5)
});

cemilan.map(function(element, indeks) {
	console.log('Indeks ' + (indeks + 1) + ' -> ' + element)
});

// Note :
// map -> Creates a new array from calling a function for every array element

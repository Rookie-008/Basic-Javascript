var cemilan = ['Basreng', 'Seblak', 'Serundeng Pedas', 'Kerupuk Kulit', 'Kacang Atom'];

cemilan.splice(1, 0, 'Keripik Singkong');
cemilan.splice(1, 5, 'Kacang Bawang', 'Makaroni');
cemilan.splice(1, 2, '416263', '414243');

console.log(cemilan.join(' - '));


// Note :
// Splice -> Add or Remove Array Elements
// cemilan.splice(index, addOrRemoveIndexItem, item1,...,item);

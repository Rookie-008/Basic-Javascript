var cemilan = ['Basreng', 'Seblak', 'Kacang Atom', 'Kacang Mede', 'Serundeng Pedas'];
// cemilan.unshift('Kerupuk Kulit');
cemilan.shift();
cemilan.shift();
cemilan.shift();
cemilan.unshift('Kerupuk Kulit');

console.log(cemilan.join(' - '));


// NOTE :
// unshift -> Add new Element on beginning array 
// shift  -> Remove Element from beginning array

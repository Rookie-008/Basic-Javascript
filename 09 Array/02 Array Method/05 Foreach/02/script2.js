var id = [0,1,2,3,4,5,6,7,8,9];
var cemilan = ['Basreng','Kacang Atom','Seblak','Makaroni','Kacang Bawang','Kacang Telur','Kerupuk Kulit','Mie Lidi','Kuping Gajah','Sakura Pedas'];

// | 1 | For
// for (var i = 0; i < a.length; i++){
// 	console.log(a[i]);
// }


// | 2 | Foreach
var showCemilan = function(a) {
	console.log(a);
};

id.forEach(showCemilan);
cemilan.forEach(showCemilan);


// Note :
// foreach -> Looping Array

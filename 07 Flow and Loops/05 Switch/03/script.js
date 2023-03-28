var a = prompt('Insert Name: \n (Rice, Pizza, Perkedel, Juice, Milk)');

switch(a){
	case 'Rice' :
	case 'Pizza' :
	case 'Perkedel' :
		alert('Food');
		break;
	case 'Juice' :
	case 'Milk' :
		alert('Drink');
		break;
	default :
		alert('Not Available : \n Choose (Rice, Pizza, Perkedel, Juice, Milk)');
		break;
}
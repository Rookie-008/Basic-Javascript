var a = prompt('Insert Name: \n (Box-1, Box-2, Box-3, Box-4, Box-5)');

switch(a){
	case 'Box-1' :
		alert('Rice');
		break;
	case 'Box-2' :
		alert('Milk');
		break;
	case 'Box-3' :
		alert('Pizza');
		break;
	case 'Box-4' :
		alert('Rujak');
		break;
	case 'Box-5' :
		alert('Bakso');
		break;
	default :
		alert('Box not Available : \n Choose (Box-1, Box-2, Box-3, Box-4, Box-5)');
		break;
}
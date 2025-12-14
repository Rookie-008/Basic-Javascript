var a = prompt('Insert Name: \n (Kerupuk, Kacang Selimut, Kembang Goyang, Keripik, Kacang Koro, Kuping Gajah, Basreng, Kacang Telor, Kacang Polong, Makaroni)');

switch(a){
	case 'Kacang Koro' :
	case 'Kacang Selimut' :
	case 'Kacang Polong' :
	case 'Kacang Telor' :
		alert('Aneka Kacang-Kacangan');
		break;
	case 'Basreng' :
	case 'Keripik' :
	case 'Makaroni' :
		alert('Aneka Cemilan Pedas');
		break;
	case 'Kembang Goyang' :
	case 'Kuping Gajah' :
	case 'Kerupuk' :
		alert('Aneka Cemilan Kriuk Kriuk');
		break;
	default :
		alert('Not Available : \n Choose (Kerupuk, Kacang Selimut, Kembang Goyang, Keripik, Kacang Koro, Kuping Gajah, Basreng, Kacang Telor, Kacang Polong, Makaroni)');
		break;
}

// 1. Object Literal
var menu1 = {
	name : "Kacang",
	type : "Kastanye",
	price : 35,
};

var menu2 = {
	name : "Kacang",
	type : "Telor",
	price : 35,
};

// 2. Function Declaration
function createMenu(name, type, price) {
	var menu = {};
	menu.name = name;
	menu.type = type;
	menu.price = price;
	return menu;
}

var menu3 = createMenu('Kacang', 'Mede', 35);
var menu4 = createMenu('Kacang', 'Kenari', 35);


// 3. Constructor
function Menu(name, type, price) {
	this.name = name;
	this.type = type;
	this.price = price;
}

var menu5 = new Menu('Kacang', 'Macademia', 40);
var menu6 = new Menu('Kacang', 'Hazelnut', 40);

// 1. Object Literal
var menu1 = {
	name : "Jus",
	type : "Wortel",
	price : 35,
};

var menu2 = {
	name : "Jus",
	type : "Tomat",
	price : 40,
};

// 2. Function Declaration
function createMenu(name, type, price) {
	var menu = {};
	menu.name = name;
	menu.type = type;
	menu.price = price;
	return menu;
}

var menu3 = createMenu('Jus', 'Jambu', 35);
var menu4 = createMenu('Jus', 'Markisa', 40);


// 3. Constructor
function Menu(name, type, price) {
	this.name = name;
	this.type = type;
	this.price = price;
}

var menu5 = new Menu('Jus', 'Jeruk', 35);
var menu6 = new Menu('Jus', 'Alpukat', 35);

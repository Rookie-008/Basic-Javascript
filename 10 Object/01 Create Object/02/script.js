// 1. Object Literal
var menu1 = {
	name : "Bakso",
	type : "Tenis",
	price : 50,
};

var menu2 = {
	name : "Bakso",
	type : "Golf",
	price : 50,
};

// 2. Function Declaration
function createMenu(name, type, price) {
	var menu = {};
	menu.name = name;
	menu.type = type;
	menu.price = price;
	return menu;
}

var menu3 = createMenu('Bakso', 'Gemes', 50);
var menu4 = createMenu('Bakso', 'Cemerlang', 50);


// 3. Constructor
function Menu(name, type, price) {
	this.name = name;
	this.type = type;
	this.price = price;
}

var menu5 = new Menu('Acar', 'Merdeka', 15);
var menu6 = new Menu('Asinan', 'Meriah', 15);
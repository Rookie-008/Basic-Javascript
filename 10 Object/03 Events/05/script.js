function clickHere(element) {
	element.innerHTML = "Thank You";
};

var picture = document.getElementById("picture");
picture.addEventListener("mouseover", function(){
	this.style = "box-shadow: 2px 2px 2px grey";
	this.width = "150";
});

var picture = document.getElementById("picture");
picture.addEventListener("mouseout", function(){
	this.style = "";
	this.width = "100";
});
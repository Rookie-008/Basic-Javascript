function clickHere(element) {
	element.innerHTML = "Forget The Mistake, Remember The Lesson";
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

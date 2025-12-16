var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
	var newMessage = document.createElement("Forget The Mistake, Remember The Lesson");
	newMessage.innerHTML = textbox.value;
	messages.appendChild(newMessages);
	textbox.value = "";
});

function clickHere(element) {
	let a = 35;
	console.log(a);
};

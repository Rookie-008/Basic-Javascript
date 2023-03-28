function clickHere(){
	let string = document.getElementById("paragraf").innerHTML;
	document.getElementById("paragraf").innerHTML = string.replace("hello", "ABC");
}
// script.js

/* Variable Declarations */
var button = document.getElementById("button");
var text = "sample";

/* Function Declarations */
function test() {
	document.getElementById("paragraph").innerHTML = text;
}

/* Event Listeners */
button.addEventListener("click", test);
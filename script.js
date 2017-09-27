// script.js

/* Variable Declarations */
var button = document.getElementById("button");

/* Function Declarations */
function rollD3() {
	var result = 3;

	document.getElementById("D3result").innerHTML = result;
}

/* Event Listeners */
button.addEventListener("click", rollD3);
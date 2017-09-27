// script.js

/* Variable Declarations */
var buttonD3 = document.getElementById("D3_button");
var buttonD6 = document.getElementById("D6_button");

function rollD3() {
	var result = 0;


	document.getElementById("D3result").innerHTML = result;
}

buttonD3.addEventListener("click", rollD3);
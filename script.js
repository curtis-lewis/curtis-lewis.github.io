// script.js

/* Variable Declarations */

// dinner variables
var buttonRandom = document.getElementById("button_random");
var paragraphDinner = document.getElementById("paragraph_dinner");
var dinnerCuisines = ["Italian", "Mexican", "Chinese", "Japanese", "Mongolian", "Indian", "American", "Greek", "Fast food"];

// movie variables
var paragraphMovie = document.getElementById("paragraph_movie");
var movieGenres = ["Comedy", "Horror", "Drama", "Romance", "Documentary", "Family", "Feel-good", "Inspirational", "Action", "Sci-Fi", "Fantasy"];

/* Function Declarations */
function getDinner() {
    paragraphDinner.innerHTML = dinnerCuisines[Math.floor(Math.random() * dinnerCuisines.length)];
}

function getMovie() {
    paragraphMovie.innerHTML = movieGenres[Math.floor(Math.random() * movieGenres.length)];
}

/* Event Listeners */
buttonRandom.addEventListener("click", function () {
    getDinner();
    getMovie();
})

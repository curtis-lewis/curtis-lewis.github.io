// script.js
//
///* Variable Declarations */
//var count = 0;
//
//// dinner variables
//var buttonRandom = document.getElementById("button_random");
//var paragraphDinner = document.getElementById("paragraph_dinner");
//var dinnerCuisines = ["Italian", "Mexican", "Chinese", "Japanese", "Mongolian", "Indian", "American", "Greek", "Fast food"];
//
//// movie variables
//var paragraphMovie = document.getElementById("paragraph_movie");
//var movieGenres = ["Comedy", "Horror", "Drama", "Romance", "Documentary", "Family", "Feel-good", "Inspirational", "Action", "Sci-Fi", "Fantasy", "Western", "Superhero", "Timepiece"];
//
///* Function Declarations */
//function getDinner() {
//    var dinnerResult = dinnerCuisines[Math.floor(Math.random() * dinnerCuisines.length)];
//    paragraphDinner.innerHTML = dinnerResult;
//}
//
//function getMovie() {
//    var movieResult =  movieGenres[Math.floor(Math.random() * movieGenres.length)];
//    paragraphMovie.innerHTML = movieResult;
//    if (movieResult == "Comedy") {
//        paragraphMovie.style.fontFamily="cursive";
//        console.log("it worked");
//    }
//}
//
//function resetFont() {
//    paragraphDinner.style.fontFamily="Encode Sans Expanded, sans-serif";
//    paragraphMovie.style.fontFamily="Encode Sans Expanded, sans-serif";   
//}
//
///* Event Listeners */
//buttonRandom.addEventListener("click", function () {
//    if (count > 0) {
//        resetFont();
//    }
//    count++;
//    getDinner();
//    getMovie();
//});

var buttonRefresh = document.getElementById("button_refresh");

function refresh() {
    document.getElementById('image_dinner_top').src = 'chinese_food.jpeg';
    console.log("button pressed");
}

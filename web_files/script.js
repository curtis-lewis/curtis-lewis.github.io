// script.js

/* HTML Objects */
var buttonRefresh = document.getElementById("button_refresh");
var foodImages = ['american_food.jpg', 'breakfast_food.jpg', 'chinese_food.jpeg', 'indian_food.jpg', 'italian_food.jpeg', 'japanese_food.jpg', 'mexican_food.jpg', 'pizza_food.jpg', 'salad_food.jpg', 'sea_food.jpg', 'southern_food.jpg', 'subsand_food.jpg'];
var moviePosters = ['avatar_poster.jpg', 'avengers_poster.jpg', 'beautyandbeast_poster.jpg', 'fightclub_poster.jpg', 'interstellar_image.jpg', 'jaws_poster.JPG', 'jurassicpark_poster.jpg', 'march_of_penguins_poster.jpg', 'matrix_poster.jpg', 'pirates_poster.jpg', 'starwars_poster.jpg', 'titanic_poster.jpg'];

/* Functions */

// number number generator
function getRandomNumber(array_size) {
    var number = Math.floor(Math.random() * array_size);
    return number;
}

// assigns random number to a food image
function getRandomFood() {
    var foodFilePath = '../food_images/';
    var randIndex = getRandomNumber(foodImages.length);
    var foodString = foodImages[randIndex];
    console.log(foodFilePath.concat(foodString));
    return foodFilePath.concat(foodString);
}

// assigns random number to a movie poster
function getRandomMovie() {
    var movieFilePath = '../movie_posters/';
    var randIndex = getRandomNumber(moviePosters.length);
    var movieString = moviePosters[randIndex];
    console.log(movieFilePath.concat(movieString));
    return movieFilePath.concat(movieString);
}

// refreshes food and movie options
function refresh() {
    document.getElementById('image_dinner_top').src = getRandomFood();
    document.getElementById('image_movie_top').src = getRandomMovie();
}

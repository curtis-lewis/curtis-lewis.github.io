// script.js

/* HTML Objects */
var buttonRefresh = document.getElementById("button_refresh");
var foodImages = ['american_food.jpg', 'breakfast_food.jpg', 'chinese_food.jpeg', 'indian_food.jpg', 'italian_food.jpeg', 'japanese_food.jpg', 'mexican_food.jpg', 'pizza_food.jpg', 'salad_food.jpg', 'sea_food.jpg', 'southern_food.jpg', 'subsand_food.jpg'];
var moviePosters = ['avatar_poster.jpg', 'avengers_poster.jpg', 'beautyandbeast_poster.jpg', 'fightclub_poster.jpg', 'interstellar_image.jpg', 'jaws_poster.jpg', 'jurassicpark_poster.jpg', 'march_of_penguins_poster.jpg', 'matrix_poster.jpg', 'pirates_poster.jpg', 'starwars_poster.jpg', 'titanic_poster.jpg'];


function getRandomNumber(array_size) {
    var number = Math.floor(Math.random() * array_size);
    console.log(number);
    return number;
}

function getRandomFood() {
    var foodFilePath = '../food_images/';
    var randIndex = getRandomNumber(foodImages.length);
    var foodString = foodImages[randIndex];
    return foodFilePath.concat(foodString);
}

function getRandomMovie() {
    var movieFilePath = '../movie_posters/';
}

// refreshes food and movie options
function refresh() {
    document.getElementById('image_dinner_top').src = getRandomFood();
}

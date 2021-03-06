/* --- script.js --- */

/* Variables */
var restCount = 30;
var restStore = 0;
var repsCount = 0;
var setsCount = 0;
var endEarly = false;

/* HTML Objects */

// displays
var displayTimer = document.getElementById("display_timer");
var displayReps = document.getElementById("display_reps");
var displaySets = document.getElementById("display_sets");

// buttons
var buttonRestIncrement = document.getElementById("button_rest_increment");
var buttonRestDecrement = document.getElementById("button_rest_decrement");
var buttonRest = document.getElementById("button_rest");
var buttonRepIncrement = document.getElementById("button_rep_increment");
var buttonSetIncrement = document.getElementById("button_set_increment");
var buttonReset = document.getElementById("button_reset");

/* Functions */

// Called when page is first loaded
function load() {
    displayTimer.innerHTML = restCount;
    displayReps.innerHTML = "Reps: " + repsCount;
    displaySets.innerHTML = "Sets: " + setsCount;
}

// Updates displayTimer
function updateTimer() {
    displayTimer.innerHTML = restCount;
}

// Updates displayReps
function updateReps() {
    displayReps.innerHTML = "Reps: " + repsCount;
}

// Updates displaySets
function updateSets() {
    displaySets.innerHTML = "Sets: " + setsCount;
}

// Increments Rest by 15
function incrementRest() {
    if (restCount == 120) {
        restCount = 120;
        updateTimer();
    } else {
        restCount = restCount + 15;
        updateTimer();
    }
}

// Decrements Rest by 15
function decrementRest() {
    if (restCount < 30) {
        restCount = 15;
        updateTimer();
    } else {
        restCount = restCount - 15;
        updateTimer();
    }
}

// Increments reps by 1
function incrementReps() {
    repsCount = repsCount + 1;
    updateReps();
}

// Increments sets by 1
function incrementSets() {
    setsCount = setsCount + 1;
    repsCount = 0;
    updateReps();
    updateSets();
}

// Resets workout data
function reset() {
    restCount = 30;
    repsCount = 0;
    setsCount = 0;
    updateReps();
    updateSets();
    updateTimer();
}

// Begins timer countdown
function countdown() {
    var count = 0;
    count = count + 1;
    if (count >= 2)
        endEarly = true;
    var timeLeft = restCount;
    buttonRest.innerHTML = "PAUSE";
    var downloadTimer = setInterval(function () {
        timeLeft--;
        displayTimer.innerHTML = timeLeft;
        if (timeLeft <= 0 || endEarly == true) {
            clearInterval(downloadTimer);
            buttonRest.innerHTML = "REST";
            restCount = 30;
            updateTimer();
            count = 0;
            return;
        }
    }, 1000);
}

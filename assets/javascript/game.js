var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var game = function () {
    computerGuess = computerChoices.charAt(Math.floor(Math.random() * computerChoices.length))
}

computerGuess = computerChoices.charAt(Math.floor(Math.random() * computerChoices.length))

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var reset = function () {
    game();
    userGuesses = [];
    guessesLeft = 9;
}

var userGuesses = [];

document.onkeyup = function (evt) {

    evt = evt || window.event;

    // Ensure we only handle printable keys
    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

    if (charCode) {
        userGuesses.push(String.fromCharCode(charCode));
    }

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (userGuess === computerGuess) {
        wins++;
        reset();

    }
    else if (guessesLeft < 1) {
        losses++;
        reset();
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }
    
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Your Guesses so far: " + userGuesses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>";

    document.getElementById("game").innerHTML = html;

    console.log(computerGuess);
    console.log(userGuess);
}
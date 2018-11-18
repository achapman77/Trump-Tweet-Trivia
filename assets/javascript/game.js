$(function() {
//Global Variables
var score = 0;
var tweetArray = [
    {t:"This is tweet 0", a:false},
    {t:"This is tweet 2", a:true},
]

function falseButton () {
    $("#false-button").value(false);
}

//Hide Start button on click and show div with trivia, True/False, and timer
//Also start timer
$("#big-button").html("<button id='start-button' type='button' class='btn btn-success btn-lg btn-block'>Start</button>")

$("#game-board").hide();

$("#reset-button").hide();

$("#big-button").on("click", "#start-button", function(){
    $("#start-button").hide();
    $("#game-board").fadeToggle(1750);
    $("#timer").html("0:00");
    $("#score").text(score + "/20");
    $("#question").text(tweetArray[0].t);
    $("#true-button").val(true);
    $("#false-button").val(false);

});


//When user clicks True or False run logic to...
//Determine If answer is correct, add a point, proceed to next question
//If answer is incorrect, show correct answer for a couple seconds and proceed to next question
//Reset timer


//If timer hits zero proceed to next question


//At end of questions show Start Over? button
//On click of Start Over, game resets

});
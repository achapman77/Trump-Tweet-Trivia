$(function() {
    //Global Variables
    var score = 0;
    var tweetArray = [
        {t:"This is tweet 0", a:true},
        {t:"This is tweet 2", a:false},
    ]

    var index = 0;
    var tweet = tweetArray[index].t;
    var answer = tweetArray[index].a

    function scoreDisp() {
        $("#score").text(score + "/20");
    }

    function nextTweet() {
        index++;
        tweet = tweetArray[index].t;
        answer = tweetArray[index].a
        $("#tweet").text(tweet);
        console.log(index);
        console.log(answer);
    }
    //Hide Start button on click and show div with trivia, True/False, and timer
    //Also start timer
    $("#big-button").html("<button id='start-button' type='button' class='btn btn-success btn-lg btn-block'>Start</button>")

    $("#game-board").hide();

    $("#reset-button").hide();

    $("#big-button").on("click", "#start-button", function(){
        $("#start-button").hide();
        $("#game-board").fadeToggle(1750);
        $("#true-button").val(true);
        $("#false-button").val(false);

        $("#timer").html("0:00");
        scoreDisp();
    
        $("#tweet").text(tweet);
        console.log(answer);
    });

    $("#true-button").on("click", function(){
        if (answer === true) {
            score++;
            scoreDisp();
            nextTweet();
        } else {
            console.log("Nope!")
        }
    })

    $("#false-button").on("click", function(){
        if (answer === false) {
            score++;
            scoreDisp();
            nextTweet();
        } else {
            console.log("Nope Again")
        }
    })
//When user clicks True or False run logic to...
//Determine If answer is correct, add a point, proceed to next question
//If answer is incorrect, show correct answer for a couple seconds and proceed to next question
//Reset timer


//If timer hits zero proceed to next question


//At end of questions show Start Over? button
//On click of Start Over, game resets

});
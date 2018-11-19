$(function() {

//Global Variables
    var score = 0;
    var unanswered = 0;
    var incorrect = 0;    
    //Timer--------------
    var timer = 11;
    var intervalId;
        
    //Tweets-------------------
    var tweetArray = [
        {
            tweet:"It's freezing and snowing in New York--we need global warming!", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/l0HlMURBbyUqF0XQI/giphy.gif"
        },
        {
            tweet:"The election is a total sham and a travesty.  We are not a democracy!", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/E9oadOOmD27jG/giphy.gif"
        },
        {
            tweet:"It makes me so happy when the miami housewives get along with each other!  I'm sucha a sap!  Watching finale. lol- don't judge me on this!", 
            answer:false, 
            actual:"Lindsay Lohan (@Lindsay Lohan)",
            giph: "https://media.giphy.com/media/7QGzubCRiSWUU58xig/giphy.gif"
        },
        {
            tweet:"My twitter has become so powerful that I can actually make my enemies tell the truth.", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/TIyJGNK325XGciFEnI/giphy.gif"
        },
        {
            tweet:"If Everybody in the World dropped out of school we would have a much more intelligent society.", 
            answer:false, 
            actual:"Jaden Smith (@officialjaden",
            giph: "https://media.giphy.com/media/9x1i6HWx1g3eY4uBYi/giphy.gif"
        },
        {
            tweet:"The concept of global warming was created by and for the Chinese in order to make U.S manufacturing non-competitive.", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/mpfMDb6MB6EWQ/giphy.gif"
        },
        {
            tweet:"Titanic 100 years wOw.  Global warming couldve saved titanic.  Sad to say", 
            answer:false, 
            actual:"Former MLB player Jose Canseco (@JoseCanseco)",
            giph: "https://media.giphy.com/media/l0MYCq8PRWNDygPKg/giphy.gif"
        },
        {
            tweet:"QUARANTINE AFRICA.  Why haven't they done so already? ?? Should have when this whole Ebola thing first started.", 
            answer:false, 
            actual:"Twitter account user Lia King (@LiAgashi)",
            giph: "https://media.giphy.com/media/rR5nptZbrvtPq/giphy.gif"
        },
        {
            tweet:"Sorry losers and haters, but my I.Q. is one of the highest -and you all know it!  Please don't feel so stupid or insecure, it's not your fault.", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/sUrqLJoLNpFa8/giphy.gif"
        },
        {
            tweet:"@katyperry  I watched Russell Brand and I think his mind is fried - he looks really bad.  Russell is a total joke, a dummy who is lost!", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/1TSUKOv4k56aIryKAP/giphy.gif"
        },
        {
            tweet:"Is it the Neil Patrick Harris show or the Emmy Awards?  How was he ever put in this position to start with? CRAZY!",
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/z48aJruaX0Jsk/giphy.gif" 
        },
        {
            tweet:"An 'extremely credible source' has called my office and told me that @BarackObama's birth certificate is a fraud.", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/3o8doYRSVzXu3l000g/giphy.gif"
        },
        {
            tweet:"@AlexSalmond, Wind turbines are ripping your country apart and killing tourism.  Electric bills in Scotland are skyrocketing-stop the madness", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/ASzK5wWjMtc6A/giphy.gif"
        },
        {
            tweet:"I'm so humble it's crazy.  I'm like the Kanye West of humility.", 
            answer:false, 
            actual:"Anna Kendrick (@AnnaKendrick47",
            giph: "https://media.giphy.com/media/3oz8xO9TDYd5HxXDUY/giphy.gif"
        },
        {
            tweet:"I am being proven right about massive vaccinations--the doctors have lied.  Save our children & their future.", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/1jZnPGsKRUQyA/giphy.gif" 
        },
        {
            tweet:"Not ashamed to admit I am at my most comfortable and confident walking around a mall.", 
            answer:false, 
            actual:"Billy Eichner",
            giph: "https://media.giphy.com/media/1bGXIlSNIgEJYXIH8M/giphy.gif"
        },
        {
            tweet:"If Obama resigns from office NOW, thereby doing a great service to the country--I will give him free lifetime golf at any one of my courses!", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/9WPEobSqkFTqw/giphy.gif"
        },
        {
            tweet:"ryan seacrest told me I had to get on Twitter.  So here I am.  First tweet.  I feel younger already.", 
            answer:false, 
            actual:"James Cameron (@JimCameron)",
            giph: "https://media.giphy.com/media/yIzOpBvGCZOQE/giphy.gif"
        },
        {
            tweet:"Remember, new 'environment friendly' lightbulbs can cause cancer.  Be careful--the idiots who came up with this stuff don't care.", 
            answer:true, 
            actual:"Trump",
            giph: "https://media.giphy.com/media/8qDgGmDKTNBBd6pxZD/giphy.gif"
        },
        {
            tweet:"Good Try!", 
            answer:"end"},
    ]
    var index = 0;
    var tweet = tweetArray[index].tweet;
    var answer = tweetArray[index].answer
    
    
    //Timer Functions
    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $("#timer").text(timer + " Seconds!");
        if (timer === 0 ) {
            unanswered++;
            nextTweet();
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
    }

    //Tweet Functions
    //Advances index of tweetArray, resets timer, watches for gameEnd
    function nextTweet() {
        index++;
        tweet = tweetArray[index].tweet;
        answer = tweetArray[index].answer;
        timer = 11;
        $("#tweet").text(tweet);
        runTimer();
        console.log(index + ": " + answer);
        gameEnd();
        $("button").prop("disabled", false);
    }

    //Stops game, shows stats, and resets index of tweetArray
    function gameEnd(){
        if (answer === "end") {
            stopTimer();
            $("#timer").hide();
            showResetBtn();
            $("#incorrect").show();
            $("#unanswered").show();
            $("#incorrect").text("Incorrect: " + incorrect);
            $("#unanswered").text(" UnAnswered: " + unanswered);
            index = 0;
            tweet = tweetArray[index].tweet;
            answer = tweetArray[index].answer;
        }
    }

    function showActual() {
        $("#tweet").text(tweetArray[index].actual);
    }

    //Display Functions--------
    function scoreDisp() {
        $("#score").text("Correct: " + score);
    }

    function showResetBtn() {
        $("#game-board").hide();
        $("#big-button").fadeIn(1750);
        $("#big-button").html("<button id='reset-button' type='button' class='btn btn-dark btn-lg btn-block'>TRY AGAIN?</button>");
        
    }
    
    function showStartBtn() {
    $("#big-button").html("<button id='start-button' type='button' class='btn btn-success btn-lg btn-block'>START!</button>")
    $("#game-board").hide();
    $("#reset-button").hide();
    $("#score").hide();
    $("#timer").hide();
    $("#incorrect").hide();
    $("#unanswered").hide();
    
    }

    function showTrueFalseBtns(){
        $("#true-box").html("<button id='true-button' type='button' class='btn btn-primary btn-lg btn-block'>TRUE</button>");
        $("#false-box").html("<button id='false-button' type='button' class='btn btn-danger btn-lg btn-block'>FALSE</button>");
    }

    //Start Game
    showStartBtn();
    
    //On Click Events----------
    $("#big-button").on("click", "#start-button", function(){
        
        score = 0;
        incorrect = 0;
        unanswered = 0;
        $("#start-button").hide();
        $("#game-board").fadeIn(1750);
        showTrueFalseBtns();
        $("#tweet").text(tweet);
        
        console.log(index + ": " + answer);
        $("#score").show();
        $("#timer").show();
        scoreDisp();
        //Start timer.  When it reaches 0 call next tweet
        runTimer();
        
        
    });

    $("#true-box").on("click", "#true-button", function(){
        if (answer === true) {
            score++;
            scoreDisp();
            // stopTimer();
            nextTweet();
            // setTimeout(nextTweet, 1000 * 3);
            //play audio
            //show picture
        } else {
            //If answer is incorrect, show correct answer for a couple seconds and proceed to next question
            //play trump loser mp3
            //show correct tweeter
            incorrect++;
            stopTimer();
            $("button").prop("disabled", true);
            // $("#true-box").off("click", "#true-button");
                setTimeout(nextTweet, 1000*3);
                showActual();
                // nextTweet();
                console.log("#of incorrect: " + incorrect)
            
        }
    })

    $("#false-box").on("click", "#false-button", function(){
        if (answer === false) {
            score++;
            scoreDisp();
            // stopTimer();
            nextTweet();
            // setTimeout(nextTweet, 1000 * 3);
        } else {
            //If answer is incorrect, show correct answer for a couple seconds and proceed to next question
            //play trump loser mp3
            //show correct tweeter
            incorrect++;
            stopTimer();
            $("button").prop("disabled", true);
            // $("#false-box").off("click", "#false-button");
            // $("#true-box").off("click", "#true-button");
                setTimeout(nextTweet, 1000*3);
                showActual();
                // nextTweet();
                console.log("#of incorrect: " + incorrect)
            
        }
    })

    $("#big-button").on("click", "#reset-button", function(){
        
        showStartBtn();

    })
});
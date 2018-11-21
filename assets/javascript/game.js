$(function() {

//Global Variables
    var score = 0;
    var unanswered = 0;
    var incorrect = 0;   
    var audio = new Audio("assets/audio/dt-words.m4a") 
    //Timer--------------
    var timer = 16;
    var intervalId;
        
    //Tweets-------------------
    var tweetArray = [
        {
            tweet:"I'd like to address the false stories and noise that have been engineered by the media.", 
            answer:false, 
            actual:"Nope!  It was Kanye West",
            giph: "https://media.giphy.com/media/fxbEuKWvcncaSUSTLM/giphy.gif"
        },
        {
            tweet:"It's freezing and snowing in New York--we need global warming!", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif",
            audio: "assets/audio/wrong3.mp3"
        },
        {
            tweet:"The election is a total sham and a travesty.  We are not a democracy!", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/E9oadOOmD27jG/giphy.gif",
            audio: "assets/audio/bababa.mp3"
        },
        {
            tweet:"It makes me so happy when the miami housewives get along with each other!  I'm sucha a sap!  Watching finale. lol- don't judge me on this!", 
            answer:false, 
            actual:"Nope!  It was Lindsay Lohan (@Lindsay Lohan)",
            giph: "https://media.giphy.com/media/7QGzubCRiSWUU58xig/giphy.gif"
        },
        {
            tweet:"My twitter has become so powerful that I can actually make my enemies tell the truth.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/TIyJGNK325XGciFEnI/giphy.gif",
            audio: "assets/audio/tippy-top.mp3"
        },
        {
            tweet:"If Everybody in the World dropped out of school we would have a much more intelligent society.", 
            answer:false, 
            actual:"Nope!  It was Jaden Smith (@officialjaden)",
            giph: "https://media.giphy.com/media/9x1i6HWx1g3eY4uBYi/giphy.gif"
        },
        {
            tweet:"I have never seen a thin person drinking a Diet Coke.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/NSG3IRHSnUdna/giphy.gif",
            audio: "assets/audio/im-really-rich.mp3"
        },
        {
            tweet:"The concept of global warming was created by and for the Chinese in order to make U.S manufacturing non-competitive.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/mpfMDb6MB6EWQ/giphy.gif",
            audio: "assets/audio/Cyber World DJT.mp3"
        },
        {
            tweet:"Titanic 100 years wOw.  Global warming couldve saved titanic.  Sad to say", 
            answer:false, 
            actual:"Nope!  It was former MLB player Jose Canseco (@JoseCanseco)",
            giph: "https://media.giphy.com/media/l0MYCq8PRWNDygPKg/giphy.gif"
        },
        {
            tweet:"QUARANTINE AFRICA.  Why haven't they done so already? ?? Should have when this whole Ebola thing first started.", 
            answer:false, 
            actual:"Nope!  It was Twitter user Lia King (@LiAgashi)",
            giph: "https://media.giphy.com/media/FQyFJNXNRx6De/giphy.gif"
        },
        {
            tweet:"Sorry losers and haters, but my I.Q. is one of the highest -and you all know it!  Please don't feel so stupid or insecure, it's not your fault.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/sUrqLJoLNpFa8/giphy.gif",
            audio: "assets/audio/Richer 3.mp3"
        },
        {
            tweet:"@katyperry  I watched Russell Brand and I think his mind is fried - he looks really bad.  Russell is a total joke, a dummy who is lost!", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/1TSUKOv4k56aIryKAP/giphy.gif",
            audio: "assets/audio/Make America Great Again.mp3"
        },
        {
            tweet:"Is it the Neil Patrick Harris show or the Emmy Awards?  How was he ever put in this position to start with? CRAZY!",
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/z48aJruaX0Jsk/giphy.gif",
            audio: "assets/audio/Chyeah.mp3" 
        },
        {
            tweet:"An 'extremely credible source' has called my office and told me that @BarackObama's birth certificate is a fraud.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/o15PHmvYmetdS/giphy.gif",
            audio: "assets/audio/Cyber Scam DJT.mp3"
        },
        {
            tweet:"@AlexSalmond, Wind turbines are ripping your country apart and killing tourism.  Electric bills in Scotland are skyrocketing-stop the madness", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/ASzK5wWjMtc6A/giphy.gif",
            audio: "assets/audio/Whats Going On Here DJT.mp3"
        },
        {
            tweet:"Also for anyone that has money they know the first rule is to use other people's money.", 
            answer:false, 
            actual:"Nope!  It was Kanye West",
            giph: "https://media.giphy.com/media/zMCfqXkwjmTO8/giphy.gif"
        },
        {
            tweet:"Entrepreneurs: Be tough, be smart, be personable, but don't take things personally.  That's good business.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/puK3pT4BbofsI/giphy.gif",
            audio: "assets/audio/bababa.mp3"

        },
        {
            tweet:"I'm so humble it's crazy.  I'm like the Kanye West of humility.", 
            answer:false, 
            actual:"Nope!  It was Anna Kendrick (@AnnaKendrick47",
            giph: "https://media.giphy.com/media/3oz8xO9TDYd5HxXDUY/giphy.gif"
        },
        {
            tweet:"I am being proven right about massive vaccinations--the doctors have lied.  Save our children & their future.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/1jZnPGsKRUQyA/giphy.gif",
            audio: "assets/audio/Believe me DJT.mp3"
        },
        {
            tweet:"If Obama resigns from office NOW, thereby doing a great service to the country--I will give him free lifetime golf at any one of my courses!", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif",
            audio: "assets/audio/youreFired.wav"
        },
        {
            tweet:"Yes I am personally rich and I can buy furs and houses for my family.", 
            answer:false, 
            actual:"Nope!  It was Kanye West",
            giph: "https://media.giphy.com/media/Jylb9PZHvJZSg/giphy.gif"
        },
        {
            tweet:"Remember, new 'environment friendly' lightbulbs can cause cancer.  Be careful--the idiots who came up with this stuff don't care.", 
            answer:true, 
            actual:"Nope!  It was Trump...",
            giph: "https://media.giphy.com/media/8qDgGmDKTNBBd6pxZD/giphy.gif",
            audio: "assets/audio/getEmOuttaHere.mp3"
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
        //Resets CSS added in decrement() below
        $("#timer").css({
            color: "white",
            fontWeight: "",
        });
        $("#game-jumbo").css("backgroundColor", "");
    }

    function decrement() {
        timer--;
        $("#timer").text(timer);
        if (timer === 0 ) {
            unanswered++;
            setTimeout(nextTweet, 1000*5);
            stopTimer();
            showActual();
        }
        if (timer <= 3) {
            $("#game-jumbo").css({
                backgroundColor: "rgba(5, 27, 150, 0.651)"
            });
        }
        if (timer <= 10) {
            $("#timer").css({
                color: "red",
                fontWeight: "900",
            });
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
        timer = 16;
        $("#actual").empty().css("margin-top","");
        $("#giph").removeAttr("src")
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
            showResetBtn();
            $("#timer-box, #question").hide();
            $("#results").show();
            $("#incorrect").text(incorrect);
            $("#unanswered").text(unanswered);
            index = 0;
            tweet = tweetArray[index].tweet;
            answer = tweetArray[index].answer;
        }
    }

    function showActual() {
        $("#tweet").empty()
        $("#actual").text(tweetArray[index].actual).css("margin-top","2em");
        $("#giph").attr("src", tweetArray[index].giph).css("margin-top","2em");
        var trumpAudio = new Audio(tweetArray[index].audio);
        trumpAudio.play();
    }

    //Render Functions-------
    function scoreDisp() {
        $("#score").text(score);
    }

    function showResetBtn() {
        $("#game-board").hide();
        $("#big-button").html("<button id='reset-button' type='button' class='btn btn-dark btn-lg btn-block'>TRY AGAIN?</button>");
    }
    
    function showStartBtn() {
        setTimeout(function(event) {audio.play()}, 1500);
        $("body").css("background-image", "url('https://media.giphy.com/media/1rNWZu4QQqCUaq434T/giphy.gif')")
        $("#game-jumbo, #scoreboard, #game-board, #reset-button, #results").hide();
        $("#game-jumbo").fadeIn(7500);
        $("#big-button").html("<div id='start-button'>START!</div>");
    }

    function showTrueFalseBtns(){
        $("#true-box").html("<button id='true-button' type='button' class='btn btn-primary btn-lg btn-block'>YES</button>");
        $("#false-box").html("<button id='false-button' type='button' class='btn btn-danger btn-lg btn-block'>NO</button>");
    }

    //Start Game

    showStartBtn();
    
    //On Click Events----------
    $("#big-button").on("click", "#start-button", function(){
        score = 0;
        incorrect = 0;
        unanswered = 0;
        $("body").animate({opacity:1}, {duration:11750}).css("background-image", "url('https://us.123rf.com/450wm/leirbagarc/leirbagarc1703/leirbagarc170300007/73736576-trump-illustration-in-american-flag.jpg?ver=6')");
        $("#start-button").hide();
        // Render game elements
        $("#game-jumbo, #game-board, #scoreboard ").fadeIn(1750);
        $("#score, #timer-box").show();
        showTrueFalseBtns();
        scoreDisp();
        $("#tweet").text(tweet);
        console.log(index + ": " + answer);
        //Start timer.  When it reaches 0 call next tweet
        setTimeout(runTimer, 1000*4);
    });

    // Yes === True
    $("#true-box").on("click", "#true-button", function(){
        if (answer === true) {
            score++;
            scoreDisp();
            nextTweet();
        } else {
            incorrect++;
            stopTimer();
            $("button").prop("disabled", true);
                //Pause before moving to next tweet
                setTimeout(nextTweet, 1000*5);
                //Shows Answer if user was incorrect
                showActual();
                console.log("#of incorrect: " + incorrect)
        }
    })

    // No === False
    $("#false-box").on("click", "#false-button", function(){
        if (answer === false) {
            score++;
            scoreDisp();
            nextTweet();
        } else {
            incorrect++;
            stopTimer();
            $("button").prop("disabled", true);
            setTimeout(nextTweet, 1000*5);
            showActual();
            console.log("#of incorrect: " + incorrect)
        }
    })

    $("#big-button").on("click", "#reset-button", function(){
        showStartBtn();
    })
});


var buttonColor = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;


$(document).keypress(function () {

    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePressed(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentlevel) {

    if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {

          setTimeout(function () {
          nextSequence();
          }, 1000);
        }


    }
    else {
        console.log("wrong");
    }


}

function nextSequence() {
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}



function playSound(currentButton) {

    var audio = new Audio("sounds/" + currentButton + ".mp3");

    audio.play();

}

function animatePressed(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {

        $("#" + currentColor).removeClass("pressed");

    }, 100);
}


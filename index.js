
var buttonColors = ["red","blue","green","yellow"] ;
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);
});

function nextSequence(){
   
    var nextNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[nextNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadein(100).fadeout(100).fadein(100);
    playSound(randomChosenColor);
}

function playSound(name){
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
}



function animatePress(currentColor) {


    $("#" + currentColor).addClass("pressed");
  

    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

    

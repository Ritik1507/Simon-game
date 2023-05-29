
var buttonColors = ["red","blue","green","yellow"] ;
var gamePattern = [];
var userClickedPattern = [];

$(".btn").on("click",function(){
    var usrChosenColor = $(this).attr("id");
    userClickedPattern.push(usrChosenColor);
});

function nextSequence(){
   
    var nextNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[nextNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadein(100).fadeout(100).fadein(100);

    var myAudio = new Audio("sound/"+randomChosenColor+".mp3");
    myAudio.play();


}


    

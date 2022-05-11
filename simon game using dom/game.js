var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];

var userClicked = [];

$(".btn").click(function(){
  var userChosen = $(this).attr("id");
  userClicked.push(userChosen);

  playSound(userChosen);
});


function nextSequence(){

  var randomNumber = Math.Floor(Math.random()*3 +1);

  var randonChosenColors = buttonColors[randomNumbers];

  gamePattern.push(randomChosenColors);

  $("#" + randonChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColors)
}

function playSound(name){
  var audio = new Audio("sounds" + randomChosenColors + ".mp3");
  audio.play();
}

function animate(color){
  $("#"+color).addClass("pressed");
}

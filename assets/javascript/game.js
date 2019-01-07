 // For every four Crystal clicks, there is a sound to correspond


 $(document).ready(function() {
      
 $(".playSound").click(function() {
    var audio = new Audio('./assets/audio/wordgame.mp3');
    audio.play();
      // obj.pause();
  });
    
  // Begin by chosing a random number
  
  function genRandom() {
    let number = [58, 84, 99, 120];
    let randomNum = Math.floor(Math.random() * numbers.length);
    let totScore = numbers[ranNumber];
    let wins = 0;
    let losses = 0;
    return totScore;
  };
  
  $("#randomNum, #wins, #losses, #totScore").empty(); 
    
  let reStartPoint = function() {

    crystal1 = Math.floor((Math.random() * 10) + 1);
    crystal2 = Math.floor((Math.random() * 10) + 1);
    crystal3 = Math.floor((Math.random() * 10) + 1);
    crystal4 = Math.floor((Math.random() * 10) + 1);
 
    Random = Math.floor((Math.random() * 108) + 17);
    $("#Random").text(randomNum);

    Score = 0
    $("#Score").text(" " + totScore);
  };

    
  function reStart() {
      
    $("#crystal1").click(function() {
    totScore = totScore + crystal1;

    $("#Score").text(" " + totScore);
    compare();

  });

  $("#crystal2").click(function() {
    totScore = totScore + crystal2;

  $("#Score").text(" " + totScore);
    compare();

  });


  $("#crystal3").click(function() {
    totScore = toScore + crystal3;

  $("#Score").text(" " + totScore);
    compare();

  });


  $("#crystal4").click(function() {
    totScore = totScore + crystal4;

  $("#Score").text(" " + totScore);
    compare();

  });
}    
      
var compare = function() {

  if(totScore > randomNum) {
    alert("Sorry, you lost.");
    losses = losses + 1

    $("#losses").text(losses);
    roundStart();

  }

  if (totScore === randomNum) {
    alert("WINNER!");
    wins = wins + 1

    $("#wins").text(wins);
    roundStart();
  }

}; 
});

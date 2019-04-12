


// To get random number
var rotateDie = function(){
  Math.floor((Math.random() * 6) + 1);
}

// To create a score array
var scorePlayer1 = [];
var scorePlayer2 = [];

// To push items to array
var player1= function(){
  scorePlayer1.push(rotateDie());
}
var scorePlayer2 = function () {
  scorePlayer2.push(rotateDie());
}

// To get cumulative score
var cumScorePlayer1 = 0;
var totalScorePlayer1 = function getSum(scorePlayer1, rotateDie){
  return scorePlayer1 + rotateDie;
}
var cumScorePlayer2 = 0;
var totalScorePlayer1 = function getSum(scorePlayer1, rotateDie) {
  return scorePlayer1 + rotateDie;
}
// function player1Total(item) {
//   document.getElementById("P1Score").innerHTML = scorePlayer1.reduce(totalScorePlayer1);
// }
// function player2Total(item) {
//   document.getElementById("P2Score").innerHTML = scorePlayer2.reduce(totalScorePlayer2);
// }

function getSum(scorePlayer1, rotateDie) {
  return scorePlayer1 + rotateDie;
}

function player1Total() {
  document.getElementById("P1Score").innerHTML = ScorePlayer1.reduce(getSum);
}


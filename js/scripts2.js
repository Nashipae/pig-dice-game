var rotateDie = function () {
  return Math.floor(Math.random() * 6) + 1;
}

function player() {
  this.roll = 0;
  this.hold = 0;
  this.score = [];
  this.ptotal = 0;
  this.playerName
}

var player1 = new player();
var player2 = new player();

player.prototype.rollDice = function () {
  this.roll = rotateDie();
  if (this.roll === 1) {
    this.score = [];
    return "Oh no! Your die score is 1";
  }
  else {
    this.score.push(this.roll);
    return this.score;
  }
}
player.prototype.holdDice = function () {
  this.ptotal = this.ptotal + this.score.reduce(function (total, num) {
    return (total + num);
  })
  return this.ptotal;
}


// check for winner
player.prototype.winnerCheck = function () {
  if (this.ptotal >= 100) {
    alert("Congratulations! You won the game.");
  }
}
// display die score through picture
// player.prototype.dieDisplay = function () {
//  if (rotateDie === 1) {
//     document.getElementById("newDice").innerHTML = "../images/dice1.jpg" alt="1">';
//   } else if (rotateDie === 2) {
//     document.getElementById("newDice").innerHTML = "../images/dice2.jpg" alt="2">';
//   } else if (rotateDie === 3) {
//     document.getElementById("newDice").innerHTML = "../images/dice3.jpg" alt="3">';
//   } else if (rotateDie === 4) {
//     document.getElementById("newDice").innerHTML = "../images/dice4.jpg" alt="4">';
//   } else if (rotateDie === 5) {
//     document.getElementById("newDice").innerHTML = "../images/dice5.jpg" alt="5">';
//   } else {
//     document.getElementById("newDice").innerHTML = "../images/dice6.jpg" alt="6">';
//   }

function print1() {
  player1.rollDice();
  player1.holdDice();
  console.log(player1.ptotal);
}



// User Logic
$(document).ready(function () {
  // $("#p1buttonroll").click(){}
  $("#p1buttonroll").click(function () {
    $("#scoreDisplay").text(player1.rollDice());
    $("#P1TotalScore").text(player1.ptotal);
    $("#totalDisplay").text("Your total score is " + player1.ptotal);
    if (player1.roll === 1) {
      $("#p1buttonroll").hide();
      $("#dieHold").hide();
      $("#p2buttonroll").show();
      $("#dieHold2").show();
    }
  });
  $("#dieHold").click(function () {
    $("#totalDisplay").text(player1.holdDice());
    $("#P1TotalScore").text(player1.ptotal);
    $("#p1buttonroll").hide();
    $("#dieHold").hide();
    $("#p2buttonroll").show();
    $("#dieHold2").show();
    player1.winnerCheck();
  });

  $("#p2buttonroll").click(function () {
    $("#scoreDisplay2").text(player2.rollDice());
    $("#P2TotalScore").text(player2.ptotal);
    $("#totalDisplay2").text("Your total score is " + player2.ptotal);
    if (player2.roll === 1) {
      $("#p2buttonroll").hide();
      $("#dieHold2").hide();
      $("#p1buttonroll").show();
      $("#dieHold").show();
    }
  });
  $("#dieHold2").click(function () {
    $("#totalDisplay2").text(player2.holdDice());
    $("#P2TotalScore").text(player2.ptotal);
    $("#p2buttonroll").hide();
    $("#dieHold2").hide();
    $("#p1buttonroll").show();
    $("#dieHold").show();
    player2.winnerCheck();
  });

});


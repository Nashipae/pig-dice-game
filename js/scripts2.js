var rotateDie = function () {
  return Math.floor(Math.random() * 6) + 1;
}

function player() {
  this.roll = 0;
  this.hold = 0;
  this.score = [];
  this.ptotal = 0;
}

var player1 = new player();
var player2 = new player();

player.prototype.rollDice = function (){
  this.roll = rotateDie();
  if (this.roll ===1){
    this.score=[];
    return "Oh no! Your die score is 1";
  } 
  else {
    this.score.push(this.roll);
    return this.score;
  }
}
player.prototype.holdDice = function(){
  this.ptotal = this.ptotal + this.score.reduce(function (total, num) {
    return (total + num);})
  return this.ptotal;
}
function print1(){
  player1.rollDice();
  player1.holdDice();
  console.log(player1.ptotal);
}

// User Logic
$(document).ready(function () {
  // $("#p1buttonroll").click(){}
  $("#p1buttonroll").click(function () {
    $("#scoreDisplay").text(player1.rollDice());
    $("#totalDisplay").text("Your total score is "+ player1.ptotal);
    if (player1.roll === 1){
      $("#p1buttonroll").hide();
      $("#dieHold").hide();
      $("#p2buttonroll").show();
      $("#dieHold2").show();
    }
  });  
  $("#dieHold").click(function () {
    $("#totalDisplay").text(player1.holdDice());
    $("#p1buttonroll").hide();
    $("#dieHold").hide();
    $("#p2buttonroll").show();
    $("#dieHold2").show();
  });  

  $("#p2buttonroll").click(function () {
    $("#scoreDisplay2").text(player2.rollDice());
    $("#totalDisplay2").text("Your total score is "+ player2.ptotal);
    if (player2.roll === 1) {
      $("#p2buttonroll").hide();
      $("#dieHold2").hide();
      $("#p1buttonroll").show();
      $("#dieHold").show();
    }
  });
  $("#dieHold2").click(function () {
    $("#totalDisplay2").text(player2.holdDice());
    $("#p2buttonroll").hide();
    $("#dieHold2").hide();
    $("#p1buttonroll").show();
    $("#dieHold").show();
    
  });
 
}); 
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
  this.score.push(this.roll);
}
player.prototype.holdDice = function(){
  this.ptotal = this.ptotal + this.score.reduce(function (total, num) {
    return (total + num);})
}
function print1(){
  player1.rollDice();
  player1.holdDice();
  console.log(player1.ptotal);
}


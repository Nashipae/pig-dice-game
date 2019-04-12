var rotateDie = function () {
  Math.floor((Math.random() * 6) + 1);
}

function player() {
  this.roll = 0;
  this.hold = 0;
  this.score = [];
  this.ptotal = [];
}

var player1 = new player();
var player2=new player();

player.prototype.rollDice = function (){
  this.roll = rotateDie();
  this.score.push(this.roll);
}
player.prototype.holdDice = function(){
  this.ptotal = this.ptotal + (this.score.reduce(function getSum(total, num) {
    return total + num;}))
}



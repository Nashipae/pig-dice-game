

// var p1=0;
// var h1= 0
// for(i=0; i<listItems.length; i++){
//   listItems[i].addEventListener("click", activateItem);
// }
// function activateItem(){
//   // alert("Click detected.");
//   p1+=1
//   console.log(p1);
//   h1+=p1
  
// }

// function rotateDie() {
//   var diceRoll = document.getElementById("die-roll")
//   diceRoll.innerHTML = Math.floor((Math.random() * 6) + 1);
// }
function rotateDie() {
  dieRoll = Math.floor((Math.random() * 6) + 1);
  return dieRoll;
};
var player1Roll= function(rotateDie){
  alert("Your score is "+dieRoll);
}
var player2Roll = function (rotateDie) {
  alert("Your score is " + dieRoll);
}
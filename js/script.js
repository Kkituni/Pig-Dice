var player1 = "";
var player2 = "";

function singleRoll (){
    return Math.floor(Math.random()*6) +1;
}

function Player() {
  this.name;
  this.roll = 0;
  this.currentScore = 0;
  this.cumulativeScore = 0;
}

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
function newTurn(player){
  player.roll = 0;
  player.currentScore = 0;

  $('#tempScore').html(player.roll);
  $('#currentScore').html(player.currentScore);
  $('#totalScore').html(player.cumulativeScore);
}
Player.prototype.checkGameWinner = function () {
  if (this.cumulativeScore >= 100) {
    alert(this.name + " Wins the game");
    endGame();
  }
}

Player.prototype.checkOne = function () {
  if(this.roll === 1){
    alert('You rolled a 1. Your turn is over');
    this.roll == 0;
    this.holdGame();
  }
}
function endGame(){
  $('#player-info').html('');

  $('#game-controls').css('display','none');


  $('#game-instructions').html('');
}

Player.prototype.rollDice = function(){
    this.roll = singleRoll();
    this.currentScore += this.roll;
    this.cumulativeScore += this.roll;

    $('#tempScore').html(this.roll);
    $('#currentScore').html(this.currentScore);
    $('#totalScore').html(this.cumulativeScore);

    this.checkOne();
    this.checkGameWinner();
}

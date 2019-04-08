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
Player.prototype.holdGame = function(){
  var activePlayer = this;
  if(this == player1){
        activePlayer = player2;
    }
    else{
      activePlayer = player1;
    }
    setActivePlayer(activePlayer);
}
function setActivePlayer(activePlayer){
  if(activePlayer == player1){
    $('#player1Controls').css('display','block');
    $('#player2Controls').css('display','none');
  }
  else{
    $('#player1Controls').css('display','none');
    $('#player2Controls').css('display','block');
  }
  newTurn(activePlayer);
  $('#game-instructions').html("It's now " +activePlayer.name + "'s turn");
}
function newGame(){
  player1 = new Player();
  player2 = new Player();

  player1.name  = prompt("Please enter Player 1's name", "Player 1");
  player2.name  = prompt("Please enter Player 2's name", "Player 2");

  $('#player-info').html(player1.name + ' vs ' + player2.name);

  $('#game-controls').css('display','block');

  $('#player2Controls').css('display','none');

  $('#game-instructions').html(player1.name + ' starts the game. Please roll the dice');

}
$(document).ready(function() {
    $("#btnNewGame").click(function(){
        newGame();
    });

    $("#btnPlayer1Roll").click(function(){
        player1.rollDice();
    });

    $("#btnPlayer1Hold").click(function(){
        player1.holdGame();
    });

     $("#btnPlayer2Roll").click(function(){
        player2.rollDice();
    });

    $("#btnPlayer2Hold").click(function(){
        player2.holdGame();
    });


});

# Pig-Dice
# PIG DICE GAME


# Author: Kelvin Kituni

# Description

A web application that generates a number randomly and returns it with specific instructions. For instance if person one rolls a dice it will show the random number from 1 to 6 but if get a 1 you are awarded a 0 and the chance given to the second player:


# BDD
# User Stories
As a user, I want to roll the dice when it's my turn to play in the game.
As a user, I want to see the score I get for each roll of the dice I make in the game.
As a user, I want to see my cumulative score for each round I play in the game. For example, if I roll the scores 2-6-3 consecutively, I should see my end score as 11.
As a user, I want the option to hold my score when I'm satisfied with the points I've gained in a round of playing. The game should, therefore, add my held score to my most recent cumulative score.
As a user, I want to be alerted when my dice rolls on number 1. This will help me know that I can't roll the dice until the alternate player takes their round.
As a user, I need a way to know which player has won the game, which means they have scored 100 points before the alternate player.


# Rules
On a turn, a player rolls the die repeatedly. The goal is to accumulate as many points as possible, adding up the numbers rolled on the die. However, if a player rolls a 1, the player's turn is over and any points they have accumulated during this turn are forfeited.
Rolling a 1 doesn't wipe out your entire score from previous turns, just the total earned during that particular roll. A player can also choose to hold (stop rolling the die) if they do not want to take a chance of rolling a 1 and losing all of their points from this turn.
If the player chooses to hold, all of the points rolled during that turn are added to his or her score.When a player reaches a total of 100 or more points, the game ends and that player is the winner

# Technologies Used
HTML
CSS
Bootstrap
javascript
Jquery


# Setup and Installation
Make sure you have git installed. On the terminal, navigate to your workspace directory and run

# Contributing
w3schools

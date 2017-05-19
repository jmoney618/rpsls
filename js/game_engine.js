/* Create the "Player" class with one input (the name of the player). Add the following properties and methods: 

name  -  the players name
hand  -  the players hand, ie "rock"
wins  -  number of wins
losses  -   number of losses
played  -   number of games played
rate  -  win rate (wins/plays)
lose()  -  this method will increment the number of losses for the palyer and update the rate
win  -  this method will increment the number of wins for the palyer and update the rate
*/

var Player = function(name) {
	this.name = name;
	this.hand = '';
	this.wins = 0;
	this.losses = 0;
	this.played = 0;
	this.rate = 0;
	this.lose = function () {
		this.losses++;
		this.played++;
		this.rate = this.wins / this.played;
		return this.losses;
	};
	this.win = function() {
		this.wins++;
		this.played++;
		this.rate = this.wins / this.played;
		return this.wins;
	};
};

/* Create the "Game" class with one input (the name of the game). Add the following properties and methods: 

running  -  the current state of the game, ie. are we in the middle of a round. should be a boolean
name  -  The name of your game
players  -  an array that will contain "Player" objects that will be created
winner  -  a string that states the name of the winner of the last round
matrix{}  -  Establish the rules... what beats what. You should already have this code.
addPlayer()  -  method that takes one input (the name of the player), create a "Player" object from it then push it onto the "players" array above.
getPlayer()  -  method that takes one input (player number, ie. 1) and returns the corrasponding "Player" object from the "players" array above
setHand()  -  method that takes two inputs (player number and hand, ie. rock) and sets the "hand" property of the corrsponding "Player" object in the "players" array above
getWinner()  -  method with no inputs that will evaluate who won the game. Should update the wins, losses, and rate of each player. Should also set the "winner" property to the name of the winning player. Must return the winning player's number or false if no winner.
*/
var Game = function(name) {
	this.running = false;
	this.name = name;
	this.winner = 'No one';
	this.players = [];
	
	//The rules of the game
	this.matrix = {
		rock: {
			scissors: true,
			lizard: true
		},
		paper: {
			rock: true,
			spock: true
		},
		scissors: {
			lizard: true,
			paper: true
		},
		lizard: {
			spock: true,
			paper: true
		},
		spock: {
			rock: true,
			scissors: true
		}
	};
	
	// Create a player from the "Player" object
	this.addPlayer = function(name) {
		player = new Player(name);
		this.players.push(player);
		return player;
	};
	
	// Return a player object based on the input
	this.getPlayer = function(player) {
		return this.players[player - 1];
	};
	
	// Set the hand for the player
	this.setHand = function(player, hand) {
		this.players[player - 1].hand = hand;
	};
	
	// Evaluate the 2 players hands and determine a winner
	this.getWinner = function() {
		var p1 = this.getPlayer(1);
		var p2 = this.getPlayer(2);
		if (!this.matrix[p1.hand][p2.hand]){
			p1.win();
			p2.lose();
			this.winner = p1.name;
			return 1;
		} else {
			p2.win();
			p1.lose();
			this.winner = p2.name;
			return 2;
		}
	};
};
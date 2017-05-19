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
var Game = function() {
	this.running = false;
	this.name = '';
	this.winner = 'No one won';
	this.players = [];
	this.addPlayer = function(name) {
		player = new Player(name);
		this.players.push(player);
		return player;
	};
	this.getPlayer = function(player) {
		return this.players[player - 1];
	};
	this.setHand = function(player, hand) {
		this.players[player - 1].hand = hand;
	};
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
	this.getWinner = function() {
		p1 = this.getPlayer(1);
		p2 = this.getPlayer(2);
		if (this.matrix[p1.hand][p2.hand]){
			
			// Testing for p1 = rock && p2 = scissors or lizard
			if ( (this.matrix[p1.hand] == 'rock') && (this.matrix['rock'][p2.hand] == 'scissors' || this.matrix['rock'][p2].hand == 'lizard') ){
				p1.win();
				p2.lose();
				winner = p1.name;
				return 1;
			} else {
				p2.win();
				p1.lose;
				winner = p2.name;
				return 2;
			};
			
			// Testing for p1 = paper && p2 = rock or spock
			if ( (this.matrix[p1.hand] == 'paper') && (this.matrix['paper'][p2.hand] == 'rock' || this.matrix['paper'][p2].hand == 'spock') ){
				p1.win();
				p2.lose();
				winner = p1.name;
				return 1;
			} else {
				p2.win();
				p1.lose;
				winner = p2.name;
				return 2;
			};
			
			// Testing for p1 = scissors && p2 = lizard or paper
			if ( (this.matrix[p1.hand] == 'scissors') && (this.matrix['scissors'][p2.hand] == 'lizard' || this.matrix['scissors'][p2].hand == 'paper') ){
				p1.win();
				p2.lose();
				winner = p1.name;
				return 1;
			} else {
				p2.win();
				p1.lose;
				winner = p2.name;
				return 2;
			};
			
			// Testing for p1 = lizard && p2 = spock or paper
			if ( (this.matrix[p1.hand] == 'lizard') && (this.matrix['lizard'][p2.hand] == 'spock' || this.matrix['lizard'][p2].hand == 'paper') ){
				p1.win();
				p2.lose();
				winner = p1.name;
				return 1;
			} else {
				p2.win();
				p1.lose;
				winner = p2.name;
				return 2;
			};
			
			// Testing for p1 = spock && p2 = rock or scissors
			if ( (this.matrix[p1.hand] == 'spock') && (this.matrix['spock'][p2.hand] == 'rock' || this.matrix['spock'][p2].hand == 'scissors') ){
				p1.win();
				p2.lose();
				winner = p1.name;
				return 1;
			} else {
				p2.win();
				p1.lose;
				winner = p2.name;
				return 2;
			};
		} else {
			return this.winner;
		}
	};
};
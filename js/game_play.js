// Initialize the game
var game = new Game("Jose Quinones");

// Create function that will "roll" the users. Using a loop will make it easier.
var roll = function() {
	var hand = [];
	
	for(var i = 1; i < 3; i++){
		var random = Math.floor(Math.random() * 5 );
	
		switch (random) {
			case 0:
				hand[i] = "rock";
				break;
			case 1:
				hand[i] = "paper";
				break;
			case 2:
				hand[i] = "scissors";
				break;
			case 3:
				hand[i] = "lizard";
				break;
			case 4:
				hand[i] = "spock";
		}
		$("#player" + i + "Choice").removeClass().addClass(hand[i]);
	}
};

// Fade in the body of the document using jQuery effects
$("#mainBody").animate( {height: "toggle"}, 2000 );


// Set the name of the game
$("#gameName").html(game.name);

// Bind to the button in the middle of the screen so that it plays the game when clicked
$("#gameController").bind("click", function() {
	if (game.running) {
		return;
	}
	game.running = true;
	// Add 2 new players if there are none already. Use a loop to make it easy.
	while (game.players.length != 2) {
		if (game.players.length < 3) {
			do {
				name1 = prompt("Player 1 enter your name: ");
			} while ( (name1 == "") && (name1.length < 3) );
			game.addPlayer(name1);
			$("#player1Name").text(name1);
		}
		
		if (game.players.length < 3) {
			do {
				name2 = prompt("Player 2 enter your name: ");
			} while ( (name2 == "") && (name2.length < 3) );
			game.addPlayer(name2);
			$("#player2Name").text(name2);
		}
	};
	
	// Start rolling. Use the "setInterval" function to accomplish this.
	var rolling = setInterval( roll, 250);
	
	// Set the "game status" and "game controller" text to "rolling" and 'vs"
	$("#gameStatus").html("...rolling...");
	$("#gameController").html("vs");
	
	
	// Set a countdown timer for 3 seconds to run this code. Use the "setTimeout" function to do this.
	var countdown = setTimeout(stopRolling, 3000);
	
	// Stop the roll. Use "clearInterval" to do it.
	function stopRolling() {
		clearInterval(rolling);
		
		// Set the hand of each player and find out who won. Look at the "class" attribute of each player's hand to get the needed value.
		game.setHand(1, $("#player1Choice").attr("class") );
		game.setHand(2, $("#player2Choice").attr("class") );
		game.getWinner();
		
		// Set the "game status" and "game controller" to "Player X Won!" and "Play Again".
		$("#gameStatus").text(game.winner + " won!");
		$("#gameController").text("Play Again");
		
		// Update the "wins, losses, and rate" numbers on the screen. The "player" objects will have this information. Do it in a loop.
		for(var i = 1; i < 3; i++) {
			$("#player" + i + "Wins").text(game.players[i - 1].wins);
			$("#player" + i + "Losses").text(game.players[i - 1].losses);
			$("#player" + i + "WinRate").text(game.players[i - 1].rate.toFixed(2));
		}
		
		game.running = false;
	}
});
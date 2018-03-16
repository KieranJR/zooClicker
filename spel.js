/* element fÃ¶r manipulation */
var button = document.getElementById("clickerbutton");
var lejonKnapp = document.getElementById("lejon");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var zebraKnapp = document.getElementById("zebra");

/* Skapa ett nytt element fÃ¶r poÃ¤ngen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lejonCost = 15;
var lejonClicks = 0;
var zebraCost = 30;
var zebra = null;
var zebraTimer = 0;

/* startvärden */
scoreText.textContent = "£0";
lejonKnapp.textContent = "Lejon: " + lejonCost;
zebraKnapp.textContent = "Zebra: " + zebraCost;

/* click event + logic */
button.addEventListener("click", function() {
	// kontrollera om vi har ett lejon aktivt, annars Äterställ clickValue
	if (lejonClicks > 0) {
		lejonClicks--;
	} else if (lejonClicks == 0) {
		clickValue = 1;		
	}
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "£" + bank; // sÃ¤tt textvÃ¤rdet i p elementet till bank.
}, true);

/* kod får zebrapowerup med räknare */
zebraKnapp.addEventListener("click", function() {
	if (bank >= zebraCost) {
		bank -= zebraCost;
		zebraTimer += 1;
		zebraCost *= 2;
		powerText.textContent = "You bought a zebra";
		zebraKnapp.textContent = "Zebra: " + zebraCost;
		// LÃ¤gg till setInterval med en funktion som laddas varje sekund
		zebra = setInterval(function() {
			bank += 10;
			scoreText.textContent = "£" + bank;
			zebraTimer--;
		}, 1000);
	} else if (zebraTimer > 0) {
		powerText.textContent = "U greedy man";
	} else {
		powerText.textContent = "U broke fam";
	}
}, true);

// knapp och kod fÃ¶r lejon powerup
lejonKnapp.addEventListener("click", function() {
	if (bank >= lejonCost) {
		clickValue *= 2;
		bank -= lejonCost;
		lejonCost *= 2;
		lejonClicks += 10;
		lejonKnapp.textContent = "Lejon: " + lejonCost;
		powerText.textContent = "You bought a lejon";
		scoreText.textContent = "£" + bank; // sÃ¤tt textvÃ¤rdet i p elementet till bank.
	} else {
		powerText.textContent = "U broke fam";
	}
}, true);

scoreDiv.appendChild(scoreText); // fÃ¤st p elementet i score diven.
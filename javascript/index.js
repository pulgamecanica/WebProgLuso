var colors = [5];
var	logoClickGameCounter = 0;
var colorGameGuessed = 0;
var colorGameMissed = 0;
var counter = 100;
var timeOut;
var selectedColor;
var logoLoved = false;
const messages = ["I hope you are bored...","What's your favourite boring thing to do?","Do you have a boring pet?","I like your smile.","Everything is also nothing :O .","I want you to be bored.","Share with your friends your heart.","Be kind.","Be bored.","Don't get creative, being bored is better.","Do you like being bored?","We love boring things.","Happy boring day!","How is it going?","I want a boring snack!","Ouch...","Hey! Stop pushing the button.","You are boring.","I am boring.","BORING MESSAGE","Are you hungry?","Do you like this website?","How many times have you pushed this button?","You done yet?","I don't like creative people...","Procrastination is boring!","Encourage others to be bored.","Boring is love.","Keep Clam and stay bored.","I love the Boring Web","Boring Web supports you.","We love you.","Get lost!","BOOOOooooorrrRRinG."];
function loveTheLogo() {
	if (logoLoved == true) {
		return;
	}else{
		document.getElementById('love-the-logo-clicks').innerHTML = parseInt(document.getElementById('love-the-logo-clicks').innerHTML) + 1;
		logoLoved = true;
	}
} 
function loadColorGame() {
	var optionFields = document.getElementsByClassName("colorOption");
	document.getElementById('start-restart-color-game').innerHTML = '<i class="fas fa-redo-alt"></i>'; 
	for(var colorcounter = 0; colorcounter < optionFields.length; colorcounter++) {
		optionFields[colorcounter].innerHTML = colors[colorcounter] = getColor();
		optionFields[colorcounter].style.color = colors[colorcounter];
	}
	document.getElementById("guess-the-color-game").style.backgroundColor = (selectedColor = colors[Math.floor((Math.random()*5))]);
}
function colorGuess(option) {
	if (colors[option] == selectedColor) {
		colorGameGuessed++;
		document.getElementById('colorGuessedCounter').innerHTML = colorGameGuessed;
		document.getElementById('colorGuessedCounter').style.color = selectedColor;
	}else {
		colorGameMissed++;
		document.getElementById('colorMissedCounter').innerHTML = colorGameMissed;
	}
	loadColorGame();
	setColorRating();
}
function setColorRating() {
	document.getElementById('colorRating').innerHTML = ((colorGameGuessed / (colorGameMissed + colorGameGuessed))*100).toFixed(2);
}
function getColor() {
	var colorCode = Math.floor(Math.random()*16777215).toString(16);
	return "#"+colorCode;
}
function resetColorGame() {
	if (confirm('Do you really want to reset your progress?')) {
		colorGameGuessed = 0;
		colorGameMissed = 0;
		document.getElementById('colorRating').innerHTML = "";
		document.getElementById('colorGuessedCounter').innerHTML = "";
		document.getElementById('colorMissedCounter').innerHTML = "";

	}
}
function startCounter() {
	if ( counter <= 0) {
		document.getElementById('the-100-sec-game-time-left').innerHTML = "You Won!<br>Here have a Bannana &#x1F34C;"; 
		document.getElementById('you-moved').style.display =  "none";
		return;
	}
	document.getElementById('you-moved').style.visibility = "hidden";
	document.getElementById('the-100-sec-game-time-left-counter').innerHTML = counter-=1;
	timeOut = setTimeout(startCounter, 1000);
}
function clearCounter() {
	clearTimeout(timeOut);
	document.getElementById('you-moved').style.visibility =  "visible";
	counter = 100;
} 
function myFunction() {
  document.body.style.background = "#19191e";
  document.getElementById('navBar').style.background = "black";
  document.getElementById('content-wrapperID').style.background = "rgba(22, 99, 67, 0.5)";
  // document.getElementById('introduction').style.background = "gray";
}
function collapse(colName) {
	var coll = document.getElementsByClassName("collapsible-"+colName);
	var i;
	for (i = 0; i < coll.length; i++) {
	    coll[i].classList.toggle("active-collapsible");
	    var content = coll[i].nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	}
}
function logoClickGame() {
	logoClickGameCounter++;
	document.getElementById('logo-click-clicks').innerHTML = logoClickGameCounter;
	document.getElementById('logo-click-message').innerHTML = "Good one! Keep it up!";
	if (logoClickGameCounter >= 50 && logoClickGameCounter < 100) {
		document.getElementById('the-logo-click-game').style.color = "#1f7a3c"
		document.getElementById('the-logo-click-game').style.animation = "bounce 1.5s ease infinite"
		document.getElementById('logo-click-message').innerHTML = "You sure are a good player!!!";
	}else if (logoClickGameCounter >= 100 && logoClickGameCounter < 205) {
		document.getElementById('the-logo-click-game').style.color = "#21ad62"
		document.getElementById('logo-click-message').innerHTML = "Are you not Bored yet?";
	}else if (logoClickGameCounter >= 250 && logoClickGameCounter < 500) {
		document.getElementById('the-logo-click-game').style.color = "#5dc9c2"
		document.getElementById('logo-click-message').innerHTML = "You got it, let's beat the Record!";
	}else if (logoClickGameCounter >= 500 && logoClickGameCounter < 1000) {
		document.getElementById('the-logo-click-game').style.color = "#88969e"
		document.getElementById('the-logo-click-game').style.animation = "shake 1.5s ease-in-out 1.0s infinite"
		document.getElementById('logo-click-message').innerHTML = "Whyyy? This is uselessss :/ ";
	}else if (logoClickGameCounter > 1000) {
		document.getElementById('the-logo-click-game').style.color = "#b2a406"
		document.getElementById('the-logo-click-game').style.fontSize = "140%"
		document.getElementById('logo-click-message').innerHTML = "Amazing job! You are the boss!";
	}
}
function youClickYouWin() {
	document.getElementById('you-cant-win-text').innerHTML = "<span id='youClickedYouWon'>You WON!</span>"; 
	return "Nice, you won!";
}
function getHint(gameHint) {
	if (gameHint == 'you-cant-win-game') {
		alert("There is a mysterious function: youClickYouWin(). I will say no more....");
	}else if (gameHint == 'dj-ninja-game') {
		alert("If you can't spot the Ninja, try to change the game background color....");
	}
}
function switcher(switchId) {
	var switchElement = document.getElementById('switch' + switchId);
	switchElement.style.animation =  'switch 1s ease';
	setTimeout(function(){
		switchElement.style.transform =  'translate3d(15px, 0, 0)';
		switchElement.style.backgroundColor =  'green';
	}, 1000);
}
function rgbaColor(colorCode) {
	var backgroundElement = document.getElementById('color-rgba');
	if (colorCode == 0) {
		backgroundElement.style.background = 'red';
		console.log("backgroundRED");
	}else if (colorCode == 1) {
		backgroundElement.style.background = 'green';
		console.log("backgroundGREEN");
	}else if (colorCode == 2) {
		backgroundElement.style.background = 'blue';
		console.log("backgroundBLUE");
	}
}
function revealNinja() {
	document.getElementById('ninja').style.color = 'white';
	document.getElementById('ninja').style.display = 'block';
}
function getMessage() {
	document.getElementById('mysterious-message-message').innerHTML = messages[Math.floor(Math.random()*messages.length)];
}
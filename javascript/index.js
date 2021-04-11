var	logoClickGameCounter = 0;
var counter = 100;
var timeOut;
var colors = [5];
var selectedColor;
var colorGameGuessed = 0;

function loadColorGame() {
	var optionFields = document.getElementsByClassName("colorOption");
	document.getElementById('start-restart-color-game').innerHTML = '<i class="fas fa-redo-alt"></i>'; 
	for(counter = 0; counter < optionFields.length; counter++) {
		console.log(optionFields[counter]);
		optionFields[counter].innerHTML = colors[counter] = getColor();
		optionFields[counter].style.color = colors[counter];
	}
	document.getElementById("guess-the-color-game").style.backgroundColor = (selectedColor = colors[Math.floor((Math.random()*5))]);
}
function colorGuess(option){
	if (colors[option] == selectedColor) {
		colorGameGuessed+= 1;
		document.getElementById('colorGuessedCounter').innerHTML = colorGameGuessed;
		document.getElementById('colorGuessedCounter').style.color = selectedColor;
		loadColorGame();
	}else {
		loadColorGame();
	}
}
function getColor() {
	var colorCode = Math.floor(Math.random()*16777215).toString(16);
	return "#"+colorCode;
}
function resetColorGame() {
	if (confirm('Do you really want to reset your progress?')) {
		colorGameGuessed = 0;
		document.getElementById('colorGuessedCounter').innerHTML = colorGameGuessed;
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
}
function getHint(gameHint) {
	if (gameHint == 'you-cant-win-game') {
		alert("There is a mysterious function: logoClickGame(). I will say no more....");
	}
}









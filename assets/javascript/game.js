// Variables for game//
var words = [ "ajstyles", "therock", "hogan", "johncena", "andrethegiant", "theundertaker", "lesnar", "trump", "machoman", "ricflair"];
var wins = 0;
var losses = 0;
var remaining = 10;
var computerChoice = words[Math.floor(Math.random() * words.length)];
var displayWord = "";
var guessedLetters ="";


// Array loop //

console.log(computerChoice);
console.log(words);
console.log(displayWord);
// Function to start game //
function setUpGame(){
  remaining = 10;
  computerChoice = words[Math.floor(Math.random() * words.length)];
  displayWord = "";
  guessedLetters = "";
  for (var i =0; i < computerChoice.length; i++){
    displayWord += "_";
  }
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("computerChoice").innerHTML = displayWord;
  document.getElementById("remaining").innerHTML = remaining;
  document.getElementById("userGuess").innerHTML = userGuess;
}
// To capture user's input //
  document.onkeyup = function(event) {
    // Determine key pressed //
    var userGuess = event.key.toLowerCase();
    
if ((userGuess == "a")||(userGuess == "b")||(userGuess == "c")||(userGuess == "d")||(userGuess == "e")||(userGuess == "f")||(userGuess == "g")||(userGuess == "h")||
(userGuess == "i")||(userGuess == "j")||(userGuess == "k")||(userGuess == "l")||(userGuess == "m")||(userGuess == "n")||(userGuess == "o")||(userGuess == "p")|| 
(userGuess == "q")||(userGuess == "r")||(userGuess == "s")||(userGuess == "t")||(userGuess == "u")||(userGuess == "v")||(userGuess == "w")||(userGuess == "x")||
(userGuess == "y")||(userGuess == "z")) {
  
  //If the letter pressed has been pressed, then don't do anything//
  //Check if letter guessed is inside of the guessedLetters variable//
  
  //Else if the user guess is not inside of computerChoice//
  //Then, decrement the remaining chancs [remaining --]//
  //Add that userGuess to the guessedLetters string//
  //Check if remaining chances is equal to 0//
  //If remaining equals 0, game over logic//
  //Reset the game using setUpGame()//

  //Else if the userGuess is in the computerChoice//
  //Loop through the computerChoice//
  //Each time the userGuess equals the letter at the index//
  //Change displayWord with the userGuess at the same index//
  //Redisplay the variables on the page//
  //Add that userGuess to the guessedLetters string//
  //Check to see if displayWord is equal to the computerChoice//
  //Win game logic win++, display everything on the page//
  //Reset the game using setUpGame()//

  if (userGuess === computerChoice) {
    wins++; 
    document.getElementById("wins").innerHTML = wins;
    
  }
  else {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    
  }
  if (userGuess!== computerChoice){
    remaining--;
    document.getElementById("remaining").innerHTML = remaining;
    
  }
  if (remaining === 0) {
    alert("You lost your belt!");
    setUpGame();

    
  }
}
};
setUpGame();


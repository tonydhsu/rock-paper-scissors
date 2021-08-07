
var rock = document.getElementById('rock');
var chuck = document.getElementById('chuck');
var bruce = document.getElementById('bruce');
var choices = document.querySelector('#choices')

choices.addEventListener('click', userChoice);

function userChoice(event) {
  var humanChoice = event.target.id;
  // console.log(humanChoice);
  mainGame(humanChoice);
}



function mainGame(playerChoice) {
  // var playerChoice = userChoice();
  var compChoice = compPick();
  console.log("Computer picks " + compChoice);
  console.log("Player picks " + playerChoice);
}

function compPick() {
  var choices = ["rock", "chuck", "bruce"]
  var randomChoice = Math.floor(Math.random()*3);
  return (choices[randomChoice]);
}

// mainGame()


//added event listenor on buttons
//if a button is pressed, return the name of button
//function that checks which button was pressed
  

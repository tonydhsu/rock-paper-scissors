import Player from "./player.js";
import Game from "./game.js";
//*************QUERY SELECTORS**********

var nameInput = document.getElementById('nameInput')
var miniPlayerName = document.getElementById('playerLabel')
var playerScore = document.getElementById('playerScore')
var computerScore = document.getElementById('compScore')
var emoji = document.getElementById('selectEmoji')
var miniEmoji = document.getElementById('miniUserEmoji')
var rock = document.getElementById('rock');
var chuck = document.getElementById('chuck');
var bruce = document.getElementById('bruce');
var choices = document.querySelector('#choices')
var winner = document.getElementById('winScreen')

var computerPlayer = new Player('Hal 9000', compScore)
var humanPlayer = new Player(nameInput.value, playerScore)

//************EVENT LISTENERS******* */
choices.addEventListener('click', userChoice);
window.addEventListener('keypress', changeName);


//**************FUNCTIONS********* */


function changeName(e) {
  if (e.key === 'Enter') {
  miniPlayerName.innerText = nameInput.value;
  miniEmoji.innerText = emoji.value;
  
  }
}
// function setScoreToZero() {
//   playerScore.innerHTML = humanPlayer.wins;
//   computerScore.innerHTML = computerPlayer.wins;
// }

function userChoice(event) {
  var playerPick = event.target.id
  var game = new Game(playerPick)
  var whoWins = game.determineWinner() 
  if (whoWins === 'player') {
    winner.innerHTML = `${nameInput.value} Wins! ${playerPick} beats ${game.compPick} `
    playerScore.innerHTML = game.playerWins;
  } else if (whoWins === 'computer') {
    winner.innerHTML = `${computerPlayer.name} Wins! ${game.compPick} beats ${playerPick}`
    compScore.innerHTML = game.compWins;
  }
 
}



// function game(playerChoice) {
//   var compChoice = computerPlayer.takeTurn();
//   var playerAndCompChoice = playerChoice + compChoice

//   if (playerAndCompChoice === 'rockbruce' || playerAndCompChoice === 'chuckrock' ||
//       playerAndCompChoice === 'brucechuck') {
//       winner.innerText = `${nameInput.value} Wins! ${playerChoice} Beats ${compChoice}!`
//       // playerScore.innerHTML = humanPlayer.playerGetsOne();
//     } else if (playerAndCompChoice === 'brucerock' || playerAndCompChoice === 'rockchuck' ||
//                playerAndCompChoice === 'chuckbruce') {
//         winner.innerText = `${computerPlayer.name} Wins! ${compChoice} Beats ${playerChoice}!`
//         // computerScore.innerHTML = computerPlayer.playerGetsOne();
//       }

// }




function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
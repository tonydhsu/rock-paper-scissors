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
setScoreToZero();

function changeName(e) {
  if (e.key === 'Enter') {
  miniPlayerName.innerText = nameInput.value;
  miniEmoji.innerText = emoji.value;
  console.log(humanPlayer)
  }
}
function setScoreToZero() {
  playerScore.innerText = humanPlayer.wins;
  computerScore.innerText = computerPlayer.wins;
}

function userChoice(event) {
  var playerPick = event.target.id;
  game(playerPick);
}

function game(playerChoice) {
  var compChoice = computerPlayer.takeTurn();
  var playerAndCompChoice = playerChoice + compChoice

  if (playerAndCompChoice === 'rockbruce' || playerAndCompChoice === 'chuckrock' ||
      playerAndCompChoice === 'brucechuck') {
      winner.innerText = `${nameInput.value} Wins! ${playerChoice} Beats ${compChoice}!`
      playerScore.innerText = humanPlayer.playerGetsOne();
    } else if (playerAndCompChoice === 'brucerock' || playerAndCompChoice === 'rockchuck' ||
               playerAndCompChoice === 'chuckbruce') {
        winner.innerText = `${computerPlayer.name} Wins! ${compChoice} Beats ${playerChoice}!`
        computerScore.innerText = computerPlayer.playerGetsOne();
      }

}

// function compPick() {
//   var choices = ["rock", "chuck", "bruce"]
//   var randomChoice = Math.floor(Math.random()*3);
//  return (choices[randomChoice]);
// }



function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
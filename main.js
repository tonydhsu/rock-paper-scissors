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
var threeImg = document.querySelectorAll('.img-btn');
var choices = document.querySelector('#choices');
var winner = document.getElementById('winScreen');
var compChoiceImg = document.getElementById('compChoiceImg');
var choicesSection = document.getElementById('choicesSection');
var chooseFighterText = document.getElementById('chooseFighterText')
var playAgain = document.getElementById('playAgainButton');
var playAgainSection = document.getElementById('playAgainSection');
var choiceImg = document.getElementById('choiceImg')
var resetScoreBtn = document.getElementById('resetBtn')



//************EVENT LISTENERS******* */
choices.addEventListener('click', startGame);
window.addEventListener('keypress', changeName);
playAgain.addEventListener('click', resetBoard);
resetScoreBtn.addEventListener('click', resetScoreBoard)


//**************FUNCTIONS********* */

var game = new Game()


function resetBoard() {
  choiceImg.hidden = true;
  rock.hidden = false;
  chuck.hidden = false;
  bruce.hidden = false;
  playAgainSection.classList.add('hidden');
 }

 function resetScoreBoard() {
    localStorage.clear();
    location.reload();
}
//  function resetScoreBoard() {
//    localStorage.clear();
//    location.reload();
//  }

function changeName(e) {
 if (e.key === 'Enter') {
 miniPlayerName.innerText = nameInput.value;
 miniEmoji.innerText = emoji.value;
 }
}
window.onload = showScore()
function showScore() {
  playerScore.innerHTML = game.humanPlayer.wins
  compScore.innerHTML = game.computerPlayer.wins;
}

function startGame(event) {
  event.preventDefault()
  var playerPick = event.target.id
  var whoWins = game.determineWinner(playerPick)
  if (whoWins === 'player') {
   winner.innerHTML = `${nameInput.value} Wins! ${playerPick} beats ${game.compPick} `
   playerScore.innerHTML = game.humanPlayer.wins
 } else if (whoWins === 'computer') {
   winner.innerHTML = `${game.computerPlayer.name} Wins! ${game.compPick} beats ${playerPick}`
   compScore.innerHTML = game.computerPlayer.wins;
 } else if (game.playerPick === game.compPick) {
   winner.innerHTML = 'Draw!'
 }

 displayChoice();
  function displayChoice() {
    // event.preventDefault;
   rock.hidden = true;
   chuck.hidden = true;
   bruce.hidden = true;
   playAgainSection.classList.remove('hidden');
   chooseFighterText.hidden = true;

function findPlayerFighter(fighter) {
  return fighter.name === game.playerPick;
}

function findComputerFighter(fighter) {
  return fighter.name === game.compPick;
}
// var playerImgSrc = game.fighters.find(fighter => fighter.name === game.playerPick).img

  var playerImgSrc = game.fighters.find(findPlayerFighter).img
   choiceImg.innerHTML = 
   `<input type="image" class="player-choice" id="choiceImgs" src=${playerImgSrc}>`

  var computerImgSrc = game.fighters.find(findComputerFighter).img
   choiceImg.innerHTML +=
   `<input type="image" class="comp-choice" id="choiceImgs" src=${computerImgSrc}>`



   //  for (var i = 0; i < game.fighters.length; i++) {
  //    if (game.playerPick === game.fighters[i].name) {
  //      choiceImg.innerHTML =
  //         `<input type="image" class="player-choice" id="choiceImgs" src=${game.fighters[i].img}>`
  //       }
  //    if(game.compPick === game.fighters[i].name) {
  //       choiceImg.innerHTML +=
  //         `<input type="image" class="comp-choice" id="choiceImgs" src=${game.fighters[i].img}>`
  //       }
        
  //     }   
      choiceImg.hidden= false;
    
  }
}
 
 
 
 
 
 
 
 
function hide(element) {
 element.classList.add('hidden')
}
 
function show(element) {
 element.classList.remove('hidden')
}


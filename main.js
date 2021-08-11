import Player from "./player.js";
import Game from "./game.js";

var nameInput = document.getElementById('nameInput');
var miniPlayerName = document.getElementById('playerLabel');
var playerScore = document.getElementById('playerScore');
var emoji = document.getElementById('selectEmoji');
var miniEmoji = document.getElementById('miniUserEmoji');
var rock = document.getElementById('rock');
var chuck = document.getElementById('chuck');
var bruce = document.getElementById('bruce');
var choices = document.querySelector('#choices');
var winner = document.getElementById('winScreen');
var playAgain = document.getElementById('playAgainButton');
var playAgainSection = document.getElementById('playAgainSection');
var choiceImg = document.getElementById('choiceImg');
var resetScoreBtn = document.getElementById('resetBtn');

choices.addEventListener('click', startGame);
window.addEventListener('keypress', changeName);
playAgain.addEventListener('click', resetBoard);
resetScoreBtn.addEventListener('click', resetScoreBoard);

var game = new Game();

window.onload = showScore()

function showScore() {
  playerScore.innerHTML = game.humanPlayer.wins;
  compScore.innerHTML = game.computerPlayer.wins;
};

function changeName(e) {
 if (e.key === 'Enter') {
 miniPlayerName.innerText = nameInput.value;
 miniEmoji.innerText = emoji.value;
 }
};

function resetBoard() {
  choiceImg.hidden = true;
  rock.hidden = false;
  chuck.hidden = false;
  bruce.hidden = false;
  playAgainSection.classList.add('hidden');
 };

 function resetScoreBoard() {
    localStorage.clear();
    location.reload();
 };

function startGame(event) {
  event.preventDefault()
  var playerPick = event.target.id;
  var whoWins = game.determineWinner(playerPick);
  if (whoWins === 'player') {
   winner.innerHTML = `${nameInput.value} Wins! ${playerPick} beats ${game.compPick} `;
   playerScore.innerHTML = game.humanPlayer.wins;
 } else if (whoWins === 'computer') {
   winner.innerHTML = `${game.computerPlayer.name} Wins! ${game.compPick} beats ${playerPick}`;
   compScore.innerHTML = game.computerPlayer.wins;
 } else if (game.playerPick === game.compPick) {
   winner.innerHTML = 'Draw!';
 };

  displayChoice();

  function displayChoice() {
   rock.hidden = true;
   chuck.hidden = true;
   bruce.hidden = true;
   playAgainSection.classList.remove('hidden');

  function findPlayerFighter(fighter) {
  return fighter.name === game.playerPick;
  };

  function findComputerFighter(fighter) {
  return fighter.name === game.compPick;
  };

  var playerImgSrc = game.fighters.find(findPlayerFighter).img;
   choiceImg.innerHTML = 
   `<input type="image" class="player-choice" id="choiceImgs" src=${playerImgSrc}>`;

  var computerImgSrc = game.fighters.find(findComputerFighter).img;
   choiceImg.innerHTML +=
   `<input type="image" class="comp-choice" id="choiceImgs" src=${computerImgSrc}>`;

  choiceImg.hidden= false;
  }
};
 

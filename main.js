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
var choices = document.querySelector('#choices')
var winner = document.getElementById('winScreen')
var choiceImgs = document.getElementById('choiceImgs');
var choiceImg = document.getElementById('choiceImg');
var compChoiceImg = document.getElementById('compChoiceImg');
var choicesSection = document.getElementById('choicesSection');
var chooseFighterText = document.getElementById('chooseFighterText')
var playAgain = document.getElementById('playAgainButton');
var playAgainSection = document.getElementById('playAgainSection');
 
//************EVENT LISTENERS******* */
choices.addEventListener('click', startGame);
window.addEventListener('keypress', changeName);
playAgain.addEventListener('click', resetBoard);
 
 
//**************FUNCTIONS********* */
 
function changeName(e) {
 if (e.key === 'Enter') {
 miniPlayerName.innerText = nameInput.value;
 miniEmoji.innerText = emoji.value;
 }
}
 
function startGame(event) {
 event.preventDefault()
 var playerPick = event.target.id
 var game = new Game(playerPick)
 var whoWins = game.determineWinner()
  if (whoWins === 'player') {
   winner.innerHTML = `${nameInput.value} Wins! ${playerPick} beats ${game.compPick} `
   playerScore.innerHTML = game.playerWins
 } else if (whoWins === 'computer') {
   winner.innerHTML = `${game.computerPlayer.name} Wins! ${game.compPick} beats ${playerPick}`
   compScore.innerHTML = game.compWins;
 } else if (game.playerPick === game.compPick) {
   winner.innerHTML = 'Draw!'
 }
 
 displayPlayerChoice();
  function displayPlayerChoice() {
   rock.hidden = true;
   chuck.hidden = true;
   bruce.hidden = true;
   playAgainSection.classList.remove('hidden');
   chooseFighterText.hidden = true;
   for (var i = 0; i < game.fighters.length; i++) {
     if (game.playerPick === game.fighters[i].name) {
       choices.innerHTML +=
          `<input type="image" class="img-btn" id="choiceImg" src=${game.fighters[i].img}>`
        }
     if(game.compPick === game.fighters[i].name) {
       choices.innerHTML +=
       `<input type="image" class="img-btn" id="choiceImg" src=${game.fighters[i].img}>`
     }
        
       }   
 }// if (game.playerPick === 'rock') {
   // function resetBoard() {
   //   choices.innerHTML +=
   //   `<input type="image" class="img-btn" id="rock" src="assets/rock.png" alt="the rock">
   //   <input type="image" class="img-btn" id="chuck" src="assets/chuck.png" alt="chuck">
   //   <input type="image" class="img-btn" id="bruce" src="assets/bruce.png" alt="bruce">`
 
     // rock.hidden = false;
     // chuck.hidden = false;
     // bruce.hidden = false;
     // choiceImg.hidden = true;
     // compChoiceImg.hidden = true;
 //   choices.innerHTML += `<img class="player-choice" src=${game.fighters[i].img}>
 //   <img class="comp-choice" src=${game.fighters[i].img}>`
  
 // }
 // function displayComputerChoice() {
 //   for (var i = 0; i < game.fighters.length; i++) {
 //   }
 //   setTimeout(resetBoard, 2000);
 // }
 // setTimeout(resetBoard(), 2000);
 
 // choicesSection.hidden = true;
}
 
 
 
 
 
 
 
 
 
function hide(element) {
 element.classList.add('hidden')
}
 
function show(element) {
 element.classList.remove('hidden')
}


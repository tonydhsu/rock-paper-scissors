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
var playerChoiceImg = document.getElementById('playerChoiceImg');
var compChoiceImg = document.getElementById('compChoiceImg');

// var computerPlayer = new Player('Hal 9000', compScore)
// var humanPlayer = new Player(nameInput.value, playerScore)

//************EVENT LISTENERS******* */
choices.addEventListener('click', userChoice);
window.addEventListener('keypress', changeName);


//**************FUNCTIONS********* */
console.log(threeImg)
console.log(choiceImgs, "choiceimg")

function changeName(e) {
  if (e.key === 'Enter') {
  miniPlayerName.innerText = nameInput.value;
  miniEmoji.innerText = emoji.value;
  }
}

function userChoice(event) {
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
  
  rock.hidden = 'true';
  chuck.hidden = 'true';
  bruce.hidden = 'true';
  displayPlayerChoice();
  displayComputerChoice();
    
  function displayPlayerChoice() {
    for (var i = 0; i < game.fighters.length; i++) {
      if (game.playerPick === game.fighters[i].name) {
        playerChoiceImg.innerHTML =
           `<img class="player-choice" src=${game.fighters[i].img}>`
         }
  
    }
  }

  function displayComputerChoice() {
    for (var i = 0; i < game.fighters.length; i++) {
      if(game.compPick === game.fighters[i].name) {
        compChoiceImg.innerHTML = 
        `<img class="comp-choice" src=${game.fighters[i].img}>`
      }
    }
  }
}



  
  


// function showPlayerChoice (playerPick) {
//   if (playerPick === "rock") {
//     console.log(playerPick, "rock")
//     hide(chuck);
//     hide(bruce)
//   } else if (playerPick === "chuck") {
//     hide(bruce)
//     hide(rock)
//     console.log(playerPick, "chuck")
//   } else if (playerPick === "bruce") {
//     hide(rock)
//     hide(chuck)
//     console.log(playerPick, "bruce")
//   }
// }



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
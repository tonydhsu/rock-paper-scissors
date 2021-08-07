//*************QUERY SELECTORS**********

var nameInput = document.getElementById('nameInput')
var miniPlayerName = document.getElementById('playerLabel')
var emoji = document.getElementById('selectEmoji')
var miniEmoji = document.getElementById('miniUserEmoji')
var rock = document.getElementById('rock');
var chuck = document.getElementById('chuck');
var bruce = document.getElementById('bruce');




//************EVENT LISTENERS******* */

window.addEventListener('keypress', changeName);


//**************FUNCTIONS********* */


function changeName(e) {
  if (e.key === 'Enter') {
  miniPlayerName.innerText = nameInput.value;
  miniEmoji.innerText = emoji.value;
  }
}


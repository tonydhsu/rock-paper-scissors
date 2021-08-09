
class Player {
  constructor(name) {
    this.name = name;
    
  }

  playerGetsOne() {
    this.wins ++
  }

  saveWinsToStorage() {
    var wins = this.wins;
    var stringWins = JSON.stringify(wins);
    localStorage.setItem('wins', stringWins);
    console.log(stringWins)
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem('wins');
    var parsedWins = JSON.parse(retrievedWins)
    console.log(parsedWins)
  }
  
  takeTurn() {
    var choices = ["rock", "chuck", "bruce"];
    var randomChoice = Math.floor(Math.random()*3);
    return (choices[randomChoice]);
    
  }
}

// module.exports = Player;
export default Player;


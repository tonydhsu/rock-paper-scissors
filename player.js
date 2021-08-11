
class Player {
  constructor(name) {
    this.name = name;
    this.wins = this.retrieveWinsFromStorage() || 0;
  }

  playerGetsOne() {
    this.wins ++
  }

  saveWinsToStorage() {
    var wins = this.wins;
    var stringWins = JSON.stringify(wins);
    localStorage.setItem(this.name, stringWins);
    console.log(stringWins)
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(this.name);
    var parsedWins = JSON.parse(retrievedWins)
    return parsedWins;
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


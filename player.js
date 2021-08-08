
class Player {
  constructor(name,wins) {
    this.name = name;
    this.wins = 0;
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
// var human = new Player("Tony", "🐶", 5)
// var computer = new Player("T-1000", "💀", 0)

// human.saveWinsToStorage();
// human.retrieveWinsFromStorage();



// console.log(human)

// console.log(computer)
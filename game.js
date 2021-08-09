import Player from "./player.js";

class Game {
  constructor(playerPick, compPick) {
    this.computerPlayer = new Player("Computer")
    this.humanPlayer = new Player("tony")
    this.playerPick = playerPick;
    this.compPick = compPick;
    this.playerWins = 0;
    this.compWins = 0;
  }

  // getComputerChoice () {
  //   var compChoice = this.computerPlayer.takeTurn();
  //   return compChoice
  // }

  determineWinner() {
    this.compPick = this.computerPlayer.takeTurn();
    var playerAndCompChoice = this.playerPick + this.compPick;
    if (playerAndCompChoice === 'rockbruce' || playerAndCompChoice === 'chuckrock' ||
      playerAndCompChoice === 'brucechuck') {
        this.playerWins ++
        return `player`
  } else if (playerAndCompChoice === 'brucerock' || playerAndCompChoice === 'rockchuck' ||
      playerAndCompChoice === 'chuckbruce') {
        this.compWins ++
        return `computer`
    }
  }

  
}

export default Game;
  

 



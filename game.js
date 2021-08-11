import Player from "./player.js";

class Game {
  constructor() {
    this.computerPlayer = new Player("Hal 9000")
    this.humanPlayer = new Player("tony")
    // this.playerPick = playerPick;
    // this.compPick = compPick;
    this.playerWins = 0;
    this.compWins = 0;
    this.fighters = [
      {
        name: 'rock',
        img:  './assets/rock.png'
      },
      {
        name: 'chuck',
        img: './assets/chuck.png'
      },
      {
        name: 'bruce',
        img: './assets/bruce.png'
      }
    ]
  }

  determineWinner(playerPick) {
    this.playerPick = playerPick;
    this.compPick = this.computerPlayer.takeTurn();
    var playerAndCompChoice = this.playerPick + this.compPick;
    if (playerAndCompChoice === 'rockbruce' || playerAndCompChoice === 'chuckrock' 
    || playerAndCompChoice === 'brucechuck') {
        // this.playerWins ++
        this.humanPlayer.playerGetsOne();
        this.humanPlayer.saveWinsToStorage();
        return `player`
      } else if (playerAndCompChoice === 'brucerock' || playerAndCompChoice === 'rockchuck' ||
        playerAndCompChoice === 'chuckbruce') {
          this.computerPlayer.playerGetsOne();
          this.computerPlayer.saveWinsToStorage();
        // this.compWins ++
        return `computer`
    } 

  }
    
  // determineDraw() {
  //     if (this.playerPick === this.compPick) {
  //       winner.innerHTML = 'Draw!'
  //     }
  //   }
  
}

export default Game;
  

 



  function getComputerChoice() {
    let number; 
    let compSelect;
    number = parseInt(Math.random()*3+1);
    if (number == 1) {
        compSelect = "Rock";
      }
    if (number == 2) {
        compSelect = "Paper";
      }
    if (number == 3) {
        compSelect = "Scissors";
      }
    console.log('Computer played: '+compSelect);
    return compSelect.toLowerCase();
  } /* randomly gets a number between 1-3, based on the number rock, paper or scissors is assigned and returned in lower case. */

  function getPlayerChoice() {
    playerSelect = prompt("...Throw!!");
    console.log("You played: "+playerSelect+"!");
    if(playerSelect.toLowerCase() === 'rock'){
        return playerSelect.toLowerCase();    
      }
    if(playerSelect.toLowerCase() === 'paper'){
        return playerSelect.toLowerCase();
      }
    if (playerSelect.toLowerCase() === 'scissors') {
        return playerSelect.toLowerCase();            
      }
    else{
        console.log('check your spelling');
        return alert('retry')
      }
  }//function that verifies and returns player selection in lowercase  

  function playRound() {        
    console.log("1...2...3... Rock, Paper, Scissors!!");
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    while (player == 'rock' || player == 'paper' || player == 'scissors') {
    if (player === computer) {
        return 'Draw';
      }
     else if (player === 'rock' && computer === 'paper'){
        console.log('Round Lost');
        return true
      }
     else if (player === 'paper' && computer === 'scissors') {
        console.log('Round Lost');
        return true
      } 
     else if (player === 'scissors' && computer === 'rock'){
        console.log('Round Lost');
        return true
      }
     else {
        console.log('You Win the Round.');
        return false
      }
    }
  }//plays rock paper and scissors one time and return a boolean value case there's a winner and a string if there's a draw

function playGame() {
    let pCounter = 0;
    let cCounter = 0;
    for (let i = 0; i < 5; i++) {
        let roundLost = playRound();
        if (roundLost === true) {
            cCounter++;                
        }
        if (roundLost == 'Draw') {
            pCounter++;
            cCounter++;
        }
        if (roundLost == false) {
            pCounter++;
        }
        console.log("Score: \nPlayer:"+pCounter+"\nComputer: "+cCounter);
        if (pCounter >= 3 || cCounter >= 3) {
            alert('Game Over');
            let result = pCounter >= 3 ? 'You Win the Game, CONGRATULATIONS!' : 'You Lose the Game :(';
            return result
        }

    }
    
}//function that plays a game of 5 rounds and keeps the score
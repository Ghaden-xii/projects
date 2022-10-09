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

  /*function getPlayerChoice(clickedButton) {
    playerSelect = clickedButton;
    console.log("You played: "+playerSelect+"!");
    if(playerSelect === 'rock'){
        return playerSelect;    
      }
    if(playerSelect === 'paper'){
        return playerSelect;
      }
    if (playerSelect === 'scissors') {
        return playerSelect;            
      }
    else{
        console.log('check your spelling');
        return alert('retry')
      }
  }//function that verifies and returns player selection in lowercase */ 

  function playRound(clickedButton) {        
    console.log("1...2...3... Rock, Paper, Scissors!!");
    let player = clickedButton;
    let computer = getComputerChoice();
    console.log("You played: "+clickedButton+"!");
    while (player == 'rock' || player == 'paper' || player == 'scissors') {
    if (player === computer) {
      console.log('DRAW, throw again!')
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
const start = document.querySelectorAll('button');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
let selection = '';
paper.addEventListener('click', () => {
  playRound('paper')
});
  
rock.addEventListener('click', () => {
  playRound('rock');
});
  
scissors.addEventListener('click', () => {
  playRound('scissors');
});  

    
    
    
    
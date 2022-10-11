const start = document.querySelectorAll('button');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const scoreDiv = document.querySelector('#score');
const container = document.querySelector('#container');
const pScore = document.createElement('div');
scoreDiv.appendChild(pScore);
const cScore = document.createElement('div');
scoreDiv.appendChild(cScore);
const hist = document.querySelector('#history');
const gameOverSel = document.createElement('div');
container.appendChild(gameOverSel);
let playerScore = 0;
let compScore = 0;
let roundResult;
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
    hist.textContent = 'Computer played: '+compSelect+'!';
    return compSelect.toLowerCase();
  }
  
function playRound(clickedButton) {        
    //alert("1...2...3... Rock, Paper, Scissors!!");
    let player = clickedButton;
    let computer = getComputerChoice();
    while (player == 'rock' || player == 'paper' || player == 'scissors') {
      if (player === computer) {
        hist.textContent = '\nDraw!';
        return 'draw'
      }
      else if (player === 'rock' && computer === 'paper'){
        hist.textContent = '\nRound Lost!';
        return false
      }
      else if (player === 'paper' && computer === 'scissors') {
        hist.textContent = '\nRound Lost!';
        return false
      } 
     else if (player === 'scissors' && computer === 'rock'){
        hist.textContent = '\nRound Lost!!';
        return false
      }
     else {
        hist.textContent = '\nYou win the round!';
        return true
      }
    }
  }

function showScore(result){
  if (result === true) {
    playerScore ? playerScore++:playerScore = 1;
  }
  if (result === false) {
    compScore ? compScore++:compScore = 1;
  }
  if (result == 'draw') {
    (playerScore || compScore) ? (playerScore++,compScore++) : (playerScore = 1, compScore = 1);
  }
  cScore.textContent =  'Computer: '+compScore;
  pScore.textContent = 'Player: '+playerScore;  
}

paper.addEventListener('click', () => {
  if (playerScore >= 5){
    gameOverSel.textContent = 'Congratulations wou win the game!!!';
    return
  }
  if (compScore >= 5){
    gameOverSel.textContent ='You lose, saltbag!'
    return
  }
  roundResult = playRound('paper');
  showScore(roundResult);
});
  
rock.addEventListener('click', () => {
  if (playerScore >= 5){
    gameOverSel.textContent = 'Congratulations wou win the game!!!';
    return
  }
  if (compScore >= 5){
    gameOverSel.textContent ='You lose, saltbag!'
    return
  }
  roundResult = playRound('rock');
  showScore(roundResult);
});
  
scissors.addEventListener('click', () => {
  if (playerScore >= 5){
    gameOverSel.textContent = 'Congratulations wou win the game!!!';
    return
  }
  if (compScore >= 5){
    gameOverSel.textContent ='You lose, saltbag!'
    return
  }
  roundResult = playRound('scissors');
  showScore(roundResult);
});  
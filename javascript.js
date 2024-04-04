function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

const resu = document.querySelector('#res');
const result = document.createElement('div');
const resultDiv = document.createElement('div');
const playerScoreDiv = document.createElement('div');
const computerScoreDiv = document.createElement('div');


result.textContent = "Press the buttons to start playing!";
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    resultDiv.textContent = `It's a tie!`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resultDiv.textContent = "You lose! Paper beats Rock";
    computerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resultDiv.textContent = "You win! Rock beats Scissors";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultDiv.textContent = "You win! Paper beats Rock";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultDiv.textContent = "You lose! Scissors beats Paper";
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultDiv.textContent = "You lose! Rock beats Scissors";
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultDiv.textContent = "You win! Scissors beats Paper";
    playerScore += 1;
  }
  result.textContent = "";
  playerScoreDiv.textContent = 'Player Score: ' +playerScore;
  computerScoreDiv.textContent = 'Computer Score: ' +computerScore;
}

resu.appendChild(result);

const bdiv = document.querySelector("#buttons");
const rockBtn = document.createElement("button");
rockBtn.className = "btn";
rockBtn.innerText = "Rock";
const paperBtn = document.createElement("button");
paperBtn.className = "btn";
paperBtn.innerText = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.className = "btn";
scissorsBtn.innerText = "Scissors";

bdiv.addEventListener('click', function(event) {
  const target = event.target;
  if (target.matches('.btn')) {
    const playerSelection = target.innerText.toLowerCase();
    playRound(playerSelection);
    if (playerSelection == 'rock')
      console.log ('Rock');
    else if (playerSelection == 'paper')
      console.log ('Paper');
    else
      console.log ('Scissors');
  }
});

bdiv.appendChild(rockBtn);
bdiv.appendChild(paperBtn);
bdiv.appendChild(scissorsBtn);
resu.appendChild(resultDiv);
resu.appendChild(playerScoreDiv);
resu.appendChild(computerScoreDiv);

const computerSelection = getComputerChoice();
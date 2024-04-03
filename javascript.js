function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

const resu = document.querySelector('#res');
const result = document.createElement('div');
result.style.cssText = 'color: red';


function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    result.textContent =
      `It's a tie!\nYou chose: ${playerSelection}\ncomputer chose: ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result.textContent = "You lose! Paper beats Rock";
    computerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result.textContent = "You win! Rock beats Scissors";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result.textContent = "You win! Paper beats Rock";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result.textContent = "You lose! Scissors beats Paper";
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result.textContent = "You lose! Rock beats Scissors";
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result.textContent = "You win! Scissors beats Paper";
    playerScore += 1;
  }
  result.textContent += `\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
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
      result.textContent += 'Rock';
    else if (playerSelection == 'paper')
      result.textContent += 'Paper';
    else
      result.textContent += 'Scissors';
  }
});

bdiv.appendChild(rockBtn);
bdiv.appendChild(paperBtn);
bdiv.appendChild(scissorsBtn);

const computerSelection = getComputerChoice();
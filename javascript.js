function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log(
      `It's a tie!\nYou chose: ${playerSelection}\ncomputer chose: ${computerSelection}`
    );
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors");
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats Rock");
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats Paper");
    playerScore += 1;
  }
  console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
}

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
      console.log('Rock');
    else if (playerSelection == 'paper')
      console.log('Paper');
    else
      console.log('Scisors');
  }
});

bdiv.appendChild(rockBtn);
bdiv.appendChild(paperBtn);
bdiv.appendChild(scissorsBtn);

const computerSelection = getComputerChoice();


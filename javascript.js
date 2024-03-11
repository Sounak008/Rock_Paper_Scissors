function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(computerSelection) {
    let playerChoice = prompt("Choose:\nrock\npaper\nscissors");
    if (playerChoice === computerSelection) {
      console.log(`It's a tie!\nYou chose: ${playerChoice}\ncomputer chose: ${computerSelection}`);
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
      console.log("You lose! Paper beats Rock");
      computerScore += 1;
      return computerScore;
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
      console.log("You win! Rock beats Scissors");
      playerScore += 1;
      return playerScore;
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
      console.log("You win! Paper beats Rock");
      playerScore += 1;
      return playerScore;
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
      console.log("You lose! Scissors beats Paper");
      computerScore += 1;
      return computerScore;
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
      console.log("You lose! Rock beats Scissors");
      computerScore += 1;
      return computerScore;
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
      console.log("You win! Scissors beats Paper");
      playerScore += 1;
      return playerScore;
    }
  }
  
  function playGame() {
    playRound(computerSelection);
    console.log(`Current Scores:\nYour Score: ${playerScore}\nComputers Score: ${computerScore}`);
    playRound(computerSelection);
    console.log(`Current Scores:\nYour Score: ${playerScore}\nComputers Score: ${computerScore}`);
    playRound(computerSelection);
    console.log(`Current Scores:\nYour Score: ${playerScore}\nComputers Score: ${computerScore}`);
    playRound(computerSelection);
    console.log(`Current Scores:\nYour Score: ${playerScore}\nComputers Score: ${computerScore}`);
    playRound(computerSelection);
    console.log(`Current Scores:\nYour Score: ${playerScore}\nComputers Score: ${computerScore}`);
  }
  
  const computerSelection = getComputerChoice();
  playGame();
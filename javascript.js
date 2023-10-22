function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    let choiceReturn = choices[randomChoice];
    return (choiceReturn)
}
function getUserChoice() {
    let choice = prompt("Enter choice");
    return (choice);
    
}

function gameWinner(computerSelection, playerSelection){
    if (computerSelection == playerSelection)
    {
        return("Its a tie!")
    }
    else if (computerSelection === "Rock")
        {
            if (playerSelection == "paper")
            {
                return("You win! Paper beats rock.")
            }
            else
            {
                return("You lose! Rock beats paper.")
            }
            
        }
    else if (computerSelection === "Paper")
    {
        if (playerSelection == "scissors")
            {
                return("You win! Scissors beat paper.")
            }
        else
            {
                return("You lose! Paper beats rock.")
            }
    }
    else
    {
        if (playerSelection == "rock")
            {
                return("You win! Rock beats scissors.")
            }
        else
            {
                return("You lose! Scissors beat paper.")
            }
    }
}
let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;
for (i = 0; i < 5; i++)
    {
        
        let computerChoice = getComputerChoice();
        let playerSelection = getUserChoice();
        console.log("Round "+roundNumber);
        console.log("Computer choice: " + computerChoice);
        console.log("Player choice: " + playerSelection);
        console.log(gameWinner(computerChoice, playerSelection));
        if (gameWinner(computerChoice, playerSelection).includes("win"))
        {
            playerScore++;
        }
        else if (gameWinner(computerChoice, playerSelection).includes("lose"))
        {
            computerScore++;
        }
        else
        {
            playerScore++;
            computerScore++;
        }
        console.log("Final Score: ");
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        roundNumber++;
    }
function win(){
if (playerScore>computerScore)
{
    return("You Win!");
}
else{
    return("Computer Wins!");
}
}
console.log(win());
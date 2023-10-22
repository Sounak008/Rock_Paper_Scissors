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

let computerChoice = getComputerChoice();
let playerSelection = getUserChoice();
console.log(gameWinner(computerChoice, playerSelection));
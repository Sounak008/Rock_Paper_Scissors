function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    let choiceReturn = choices[randomChoice];
    return (choiceReturn)
}
console.log(getComputerChoice());
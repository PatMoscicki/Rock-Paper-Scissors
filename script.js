// Play rock-paper-scissors
// two functions - getComputerChoice and playRound
// getComputerChoice randomly returns rock paper or scissors

// playRound(playerSelection, computerSelection): 
// for computerSelection take value from getComputerChoice
// ask for playerSelection(prompt) and assign answer to the variable
// playerSelection value must be case insensitive
// validate if computerSelection or playerSelection is of a higher value
// return win or lose message 
// display message in console.log


function getComputerChoice(number) {
const choice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
console.log(choice);

}




// Initialize score prior to game start
let playerScore = 0;
let computerScore = 0;

// function playing five rounds of the game
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
   
        
// function returning computer random choice
function getComputerChoice () {
    const computerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
    return computerChoice;
}

const computerSelection = getComputerChoice();

// player's choice - case insensitive
const answer = prompt("Choose rock, paper or scissors");
const playerSelection = answer[0].toUpperCase() + answer.slice(1).toLowerCase();


// function playing a single round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore += 1;
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore += 1;
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore += 1;
        return "You lose! Scissors beat Paper!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        return "You win! Scissors beat Paper!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore += 1;
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore += 1;
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection == computerSelection) {
        return "Draw! Try again";
    }
    else {
        return "Please choose rock, paper or scissors";
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);

}}

// function calculating score
function finalResult() {
    if (playerScore > computerScore) {
        return "Final result: You won the game";
    }
    else if (playerScore < computerScore) {
        return "Final result: Computer won the game";
    }

    else {
        return "Final result: Draw";
    }
}

// Calling the game function 
game();
console.log(finalResult());




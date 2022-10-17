// Initialization of point values before the game starts
let playerScore = 0;
let computerScore = 0;

// Function that loops five rounds of the game
function game() {
    for (let i = 0; i < 5; i++) {

// Computer choice randomizer

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
    return choice; 
}
const computerSelection = getComputerChoice();



// Player choice, case insensitive

const answer = prompt("Choose rock, paper or scissors");
const playerSelection = answer[0].toUpperCase() + answer.slice(1).toLowerCase();



// Play one round of the game, calculate results of each round:

function playRound(playerSelection, computerSelection) {
    
   if (playerSelection == computerSelection) {
        return "Draw, try again"; 
    }

    else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            playerScore += 1;
            return "Rock wins, congrats";
        }

        else {
            computerScore += 1;
            return "Paper wins, too bad";
        }

    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore += 1;
            return "Paper wins, congrats"
        }

        else {
            computerScore += 1;
            return "Scissors win, too bad";
        }
    }

    else if (playerSelection == "Scissors") {
        
        if (computerSelection == "Paper") {
            playerScore += 1;
            return "Scissors win, congrats";
            
        }

        else {
            computerScore += 1;
            return "Rock wins, too bad";
        }
    }

 
    else {
        return "Wrong choice, pick again";
    }
 
}

console.log(playRound(playerSelection, computerSelection));

    }
}

// Function that calculates the final results of five rounds played

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

// Call game function, display final results

game();
console.log(finalResult());




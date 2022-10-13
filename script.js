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


// Computer choice randomizer

function getComputerChoice(number) {
let choice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
return choice;
}

// Player selection function with prompt - case insensitive
const answer = prompt("Make your choice: rock, paper or scissors", "");
let playerSelection = answer[0].toUpperCase() + answer.slice(1).toLowerCase();
const computerSelection = getComputerChoice();

// Function that allows a single round to be played - neither an optimal nor an elegant solution but it works




function playRound(playerSelection, computerSelection) {

     if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "Scissors beat paper, You win!";
    }

    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Rock beats scissors, You lose!"
    }

    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "Rock beats scissors, You win!";
    }

    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "Paper beats rock, You lose!";
    }

    else if (playerSelection == "Paper" && computerSelection == "Rock") {
       return "Paper beats rock, You win!";
    }

    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "Scissors beat paper, You lose!";
    }

    else {
        return "Tie, Let's do it again!";
    }

}



// Result display in console (playRound)
console.log(playRound(playerSelection, computerSelection));

// function game:
// plays 5 rounds of playRound
// lists all results returned from each of the 5 rounds played
// displays results in console





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



// Play one round of the game:

function playRound(playerSelection, computerSelection) {
  
   if (playerSelection == computerSelection){
        return "Draw, try again"; 
    }

    else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return "Rock wins, congrats";
        }

        else {
            return "Paper wins, too bad";
        }
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "Paper wins, congrats"
        }

        else {
            return "Scissors win, too bad";
        }
    }

    else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            return "Scissors win, congrats";
        }

        else {
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

// Call game function

game();

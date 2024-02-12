let computerSelection = "";
let playerSelection = "";
let result = "";

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const result = Math.floor(Math.random() * choice.length);
    return computerSelection = choice[result];
}

function getPlayerInput(input) {
    playerInput = prompt("Choose between paper, rock, or scissors: ");
    return playerSelection = playerInput.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        result = "It's a draw!";
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        result = "Player wins!";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        result = "Computer wins!";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        result = "Computer wins!";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        result = "Player wins!";
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        result = "Player wins!";
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        result = "Computer wins!";
    }
    return result;
}

getComputerChoice();
getPlayerInput();
console.log("computer: ", computerSelection);
console.log("player: ", playerSelection);
console.log(playRound(computerSelection, playerSelection));

let computerSelection = "";
let playerSelection = "";
let result = "";
let gameResult = "";
let computerResult = 0;
let playerResult = 0;

function getComputerChoice() {
    // get a random value for computer choices
    const choice = ['rock', 'paper', 'scissors'];
    const result = Math.floor(Math.random() * choice.length);
    return computerSelection = choice[result];
}

function getPlayerInput(input) {
    /*
    playerInput = prompt("Choose between paper, rock, or scissors: ");
    return playerSelection = playerInput.toLowerCase();*/

}

function playRound(computerSelection, playerSelection) {
    //game logic using if else
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

let playGame = () => {
    getComputerChoice();
    //getPlayerInput();
    console.log('player: ', playerSelection);
    console.log('comp:', computerSelection);
    playRound(computerSelection, playerSelection);
    if (result === "It's a draw!"){
        computerResult += 0;
        playerResult += 0;
    }
    else if (result === "Computer wins!"){
        computerResult += 1;
    }
    else {
        playerResult += 1;
    }
    if (computerResult > playerResult){
        gameResult = "Computer is the winner! Beep beep bop bop!";
    }

    else if (computerResult === playerResult){
        gameResult = "It's a draw!!!";
    }

    else {
        gameResult = "Humanity prevails! Autobots roll out!";
    }
    // calculate the final game results
    console.log("player results: ", playerResult);
    console.log("computer results : ", computerResult);
    return gameResult;
};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playGame();
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playGame();
});

scissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    playGame();
});



let computerSelection = "";
let playerSelection = "";
let result = "";
let computerResult = 0;
let playerResult = 0;

const container = document.querySelector('#container');
const matchResult = document.createElement('div');
const winner = document.createElement('div');
const score = document.createElement('div');
container.appendChild(matchResult);
container.appendChild(score);
container.appendChild(winner);



function getComputerChoice() {
    // get a random value for computer choices
    const choice = ['rock', 'paper', 'scissors'];
    const result = Math.floor(Math.random() * choice.length);
    return computerSelection = choice[result];
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
    matchResult.textContent = result;
    return result;
}

let playGame = () => {
    winner.textContent = '';
    getComputerChoice();
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
    if (computerResult === 5){
        winner.textContent = "Computer is the winner! Beep beep bop bop!";
        computerResult = 0;
        playerResult = 0;

    }

    else if (playerResult === 5){
        winner.textContent = "Humanity prevails! Autobots roll out!";
        computerResult = 0;
        playerResult = 0;
    }

    // calculate the final game results
    console.log("player results: ", playerResult);
    console.log("computer results : ", computerResult);
    score.textContent = "Player : " + playerResult + " Computer : " + computerResult;
};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playGame();
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playGame();
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playGame();
});



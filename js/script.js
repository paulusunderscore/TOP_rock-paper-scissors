function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const result = Math.floor(Math.random() * choice.length);
    const computerChoice = choice[result];
    return computerChoice;
}
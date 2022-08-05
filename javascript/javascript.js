console.log("Hello World!")

/*User input field*/

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "userInput");
document.body.appendChild(input);

const button = document.createElement("button");
button.innerText = "Enter";
document.body.appendChild(button)

let playerSelection = document.getElementById("userInput").value.toLowerCase;

console.log(playerSelection)

document.getElementById("userInput").addEventListener("keypress", (event) => {
    if (e.key === "Enter") {
        function round(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "It's a tie!";
            } else if (playerSelection === "rock" && computerSelection === "Paper") {
                return "You lose! Paper beats rock!";
            } else if (playerSelection === "paper" && computerSelection === "Scissors") {
                return "You lose! Scissors beats paper!";
            } else if (playerSelection === "scissors" && computerSelection === "Rock") {
                return "You lose! Rock beats scissors";
            } else if (playerSelection === "rock" && computerSelection === "Scissors") {
                return "You Win!";
            } else if (playerSelection === "paper" && computerSelection === "Rock") {
                return "You win!";
            } else if (playerSelection === "scissors" && computerSelection === "Paper") {
                return "You win!";
            }
        }}});

/*Random generator for computer choice*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    switch(getRandomIntInclusive(1,3)) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Something went wrong...";
    }
}

const choices = ["rock", "paper", "scissors"];

/*Random generator for computer input*/
const computerSelection = choices[Math.floor(Math.random()*choices.length)];
console.log(computerSelection);

const playerSelection = prompt("Enter your choice");

if (playerSelection === "rock" || "paper" || "scissors") {
    return `You chose ${playerSelection}`;
} else {
    return "Error! Please enter again.";
};

function playRound() {

}
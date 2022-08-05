console.log("Hello World!")

/*User input field*/

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "userInput");
document.body.appendChild(input);

const userInputText = document.getElementById("userInput");
userInputText.setAttribute("placeholder", "Enter your choice here");

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        para.textContent = "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        para.textContent = "You lose! Paper beats rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        para.textContent = "You lose! Scissors beats paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        para.textContent = "You lose! Rock beats scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        para.textContent = "You Win!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        para.textContent = "You win!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        para.textContent = "You win!";
    }
}

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

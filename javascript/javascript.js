console.log("Hello World!")

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "userInput");
document.body.appendChild(input);

const userInputText = document.getElementById("userInput");
userInputText.setAttribute("placeholder", "Enter your choice here");



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    switch(getRandomIntInclusive(1,3)) {
        case 1:
            return "Rock!";
            break;
        case 2:
            return "Paper!";
            break;
        case 3:
            return "Scissors!";
            break;
        default:
            return "Something went wrong...";
    }
}

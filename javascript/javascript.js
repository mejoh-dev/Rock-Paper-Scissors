console.log("Hello World!")

function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    switch()
        case 0:
            console.log("Rock!");
            break;
        case 1:
            console.log("Paper!");
            break;
        case 2:
            console.log("Scissors!");
            break;
        default:
            console.log("Something went wrong...");



}
console.log()
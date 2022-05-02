/* 
- Create a function for the computer to randomly select a rock, paper or scissor
- Create a function that plays a single round of rps with the user and the computer
- User input isnt case sensitive (inlude .lower on input)
*/
let playerPoints = 0, computerPoints = 0;
const results = document.querySelector('#results');
const humanPoints = document.querySelector('.human-points');
const cpuPoints = document.querySelector('.cpu-points');
const images = document.querySelectorAll('img');
const button = document.querySelector('button');




function computerPlay() {
    // declare variable with all playable choices
    const choices = ["rock", "paper", "scissors"]
    // chooses the index of the choices array using.length
    const randChoice = Math.floor(Math.random() * choices.length);
    // new variable to be able to print out the random choice
    return choices[randChoice]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.textContent = ("Looks like your tied");
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            humanPoints.textContent = ++playerPoints;
            results.textContent = (`You won, ${playerSelection} beats ${computerSelection}!`);
        } else {
            cpuPoints.textContent = ++computerPoints;
            results.textContent = (`You lose, ${computerSelection} beats ${playerSelection}!`);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            humanPoints.textContent = ++playerPoints;
            results.textContent = (`You won, ${playerSelection} beats ${computerSelection}!`);
        } else {
            cpuPoints.textContent = ++computerPoints;
            results.textContent = (`You lose, ${computerSelection} beats ${playerSelection}!`);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            humanPoints.textContent = ++playerPoints;
            results.textContent = (`You won, ${playerSelection} beats ${computerSelection}!`);
        } else {
            cpuPoints.textContent = ++computerPoints;
            results.textContent = (`You lose, ${computerSelection} beats ${playerSelection}!`);
        }
    }
}

const test1 = "rock"
const test2 = computerPlay();
console.log(playRound(test1, test2));

// function game() {


//     for (let i = 0; i < 5; i++) {
//         playRound(i)
//     }
// }
/* 
- Create a function for the computer to randomly select a rock, paper or scissor
- Create a function that plays a single round of rps with the user and the computer
- User input isnt case sensitive (inlude .lower on input)
*/

// global variable to store all data-selection calls in html
const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScore = document.querySelector('[data-cpu-score]');
const userScore = document.querySelector('[data-user-score]');
// variable to get the results class and be able to change text in results div
const results = document.querySelector('.results');
const choices = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {

        name: 'scissors',
        beats: 'paper'
    }
]


//  add an on-click button for choice to count as user choice
selectionButtons.forEach(selectionChoice => {
    selectionChoice.addEventListener('click', e => {
        const selectionName = selectionChoice.dataset.selection
        const choice = choices.find(choice => choice.name === selectionName)
        gameRound(choice)
    })
})

// increments the score by 1 depending on who wins
function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1
}

function gameRound(selection) {
    const computerChoice = computerRand()
    // if user is winner checks user choice first
    const userWinner = checkWinner(selection, computerChoice)
    // if computer is winner checks computer choice first
    const computerWinner = checkWinner(computerChoice, selection)
    displayResult(computerWinner, userWinner)

    if (userWinner) incrementScore(userScore)
    if (computerWinner) incrementScore(computerScore)
}


function displayResult(computerWinner, userWinner) {
    if (computerWinner === false && userWinner === false) {
        results.textContent = 'Its a tie'
    } else if (userWinner === true) {
        results.textContent = 'Congrats you won'
    } else {
        results.textContent = 'Computer wins, you lost'
    }
}

function computerRand() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

// checks the object list to see if choice beats the random computer name
function checkWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

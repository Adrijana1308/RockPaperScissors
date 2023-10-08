game.setAttribute("style", "text-align:center");

// creating an element in javascript
const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
 
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const showResultDisplay = document.createElement('h1')
const resGrid = document.getElementById('res')
resGrid.append(showResultDisplay)

const choices = ['rock', 'paper', 'scissors']

let userChoice
let computerChoice

let userWin = 0
let computerWin = 0

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResult()
    showResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] 
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
  }


const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors' :
        case 'paperrock' :
            resultDisplay.innerHTML = 'YOU WIN!'
            userWin++
            break
        case 'paperscissors':
        case 'scissorsrock' :
        case 'rockpaper' :
            resultDisplay.innerHTML = 'YOU LOSE!'
            computerWin++
            break
        case 'scissorsscissors':
        case 'rockrock' :
        case 'paperpaper' :
            resultDisplay.innerHTML = 'ITS A DRAW!'
            break
    }
    showResultDisplay.innerHTML =  'User:' + userWin + ' ' + 'Computer:' + computerWin
}

userChoiceDisplay.style.padding = '20px';
userChoiceDisplay.style.fontSize = '30px';

computerChoiceDisplay.style.padding = '20px';
computerChoiceDisplay.style.fontSize = '30px';

resultDisplay.style.padding = '20px';
resultDisplay.style.fontSize = '30px';

button.style.display = 'block';
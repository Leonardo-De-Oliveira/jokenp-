let resultGame = document.querySelector(".resultGame")
let humanScore = document.querySelector(".humanScore")
let machineScore = document.querySelector(".machineScore")

let resultMachine = 0
let resultHuman = 0
let resultCPU = 0

const options = ['rock', 'paper', 'scissors']

const GAME_VALUES = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const select = (value) => {

    resultMachine = Math.floor(Math.random() * 3)
    let resultMachineFormat = options[resultMachine]

    let changeChoiceHuman =  document.querySelector('.choice')
    changeChoiceHuman.src = `./assets/${value}.png`

    let changeChoiceCPU =  document.querySelector('.choiceCPU')
    changeChoiceCPU.src = `./assets/${options[resultMachine]}.png`

    playGame(value, resultMachineFormat)
}

const playGame = (value, resultMachine) => {

    if (value === resultMachine) {

        resultGame.innerHTML = `Deu Empate`

    } else if (value === GAME_VALUES.ROCK && resultMachine === GAME_VALUES.PAPER ||
        value === GAME_VALUES.PAPER && resultMachine === GAME_VALUES.SCISSORS ||
        value === GAME_VALUES.SCISSORS && resultMachine === GAME_VALUES.ROCK) {

        resultCPU++

        machineScore.innerHTML = `Pontuação CPU: ${resultCPU}`
        resultGame.innerHTML = `Você perdeu`
    }
    else {

        resultHuman++

        humanScore.innerHTML = `Sua Pontuação: ${resultHuman}`
        resultGame.innerHTML = `Você Ganhou!`
    }

}
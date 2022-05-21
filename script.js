let computerSelection;
let playerSelection;

//
function playRound(playerSelection,computerSelection) {
    
}

//
function playerPlay(playerSelection) {
    playerSelection = prompt('Choose rock, paper or scissors', '')
}

// 
function computerPlay(computerSelection) {
    let randomNumber = Math.floor(Math.random()*3);

    if(randomNumber === 0)
        return 'rock';
    else if(randomNumber === 1)
        return 'paper';
    else
        return 'scissors';
}

console.log(computerSelection)
let playerPoints = 0;
let computerPoints = 0;

let computerSelection;
let playerSelection;

startGame();

// Asking if player wants to play game
function startGame() {
    let play = confirm('Wanna play Rock, Paper, Scissors game? Open console by pressing F12 and press OK!');

    if(play === true)
        game();
    else
        alert('Okay then. If you change your mind, refresh the page.')
}

// Starting rounds and telling player who wins entire game
function game() {

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        playRound();
        countScore();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerPoints > computerPoints)
        alert(`Congratulations Player, you won! Score: ${playerPoints} vs ${computerPoints}`)
    else if (playerPoints < computerPoints)
        alert(`Congratulations Player, you lost! Score: ${playerPoints} vs ${computerPoints}`)
    else
        alert(`No one won! Score: ${playerPoints} vs ${computerPoints}`)

    play = confirm('Do you want to start over?')
    
    if (play === true) {
        playerPoints = 0;
        computerPoints = 0;
        game();
    }
    else
        alert('Have a nice day!')


}

// Getting value from two players and telling player who wins
function playRound(playerSelection,computerSelection) {

    switch (true) {
        case (playerSelection === 'rock' && computerSelection === 'scissors') :
            return ('You Win! Rock beats Scissors');
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock') :
            return ('You Win! Paper beats Rock');
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper') :
            return ('You Win! Scissors beats Paper');
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock') :
            return ('You Lose! Rock beats Scissors');
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper') :
            return ('You Lose! Paper beats Rock');
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors') :
            return ('You Lose! Scissors beats Paper');
            break;
        
        default:
            return ('It\'s a tie!');
    }
}

// Counting score of player and computer
function countScore() {
    switch (true) {
        case (playerSelection === 'rock' && computerSelection === 'scissors') :
            playerPoints += 1;
            return playerPoints;
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock') :
            playerPoints += 1;
            return playerPoints;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper') :
            playerPoints += 1;
            return playerPoints;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock') :
            computerPoints += 1;
            return computerPoints;
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper') :
            computerPoints += 1;
            return computerPoints;
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors') :
            computerPoints += 1;
            return computerPoints;
    }
}

// Getting value from player's input
function playerPlay() {

        let playerInput = prompt('Type rock, paper or scissors to play.', '');
        
        if(playerInput === null || playerInput === '') {
            console.log('You didn\'t type anything! Try again.');
            playerPlay();
        }
        else 
            playerInput = playerInput.toLowerCase();
        
        if(!(playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') || playerInput === null) {
            console.log('Wrong choice! Try again.');
            playerPlay();
        }
        else
            return playerSelection = playerInput;
}

// Getting random value from computer
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0)
        return 'rock';
    else if (randomNumber === 1)
        return 'paper';
    else
        return 'scissors';
}
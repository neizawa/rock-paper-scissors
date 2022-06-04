// Randomized favicons (for fun)
let faviconElem = document.getElementById('favicon');
faviconElem.setAttribute('href',`./images/${Math.floor(3*Math.random())+1}.png`);

let playerPoints = 0;
let computerPoints = 0;
let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll("button");

const scoreText = document.querySelector('.score')
console.log(`Score: ${playerPoints} vs ${computerPoints}`);

buttons.forEach(btn => btn.addEventListener('click', e => {
    playerSelection = (e.path[1].className)
    game()
    if (computerPoints === 5 || playerPoints === 5) {
        computerPoints = 0;
        playerPoints = 0;
    }
}));



// Starting rounds and telling player who wins entire game
function game() {
        if (computerPoints < 5 && playerPoints < 5) {
            computerSelection = computerPlay();
            countScore();
            }
            const result = document.querySelector('.result');
            const newNode = result.cloneNode(true);
            result.parentNode.replaceChild(newNode, result);
            newNode.style.cssText = "animation: growingFont 1s;";
            if (computerPoints < 5 && playerPoints < 5)
                newNode.textContent = (playRound(playerSelection, computerSelection));
            else if ((computerPoints === 5 || playerPoints === 5)) {
                if (playerPoints > computerPoints) {
                                        newNode.textContent = `VICTORY!`;
                    newNode.style.cssText = "color: green; animation: growingFont 1s; font-weight: bold";
                }
                else {
                                        newNode.textContent = `DEFEAT!`;
                    newNode.style.cssText = "color: red; animation: growingFont 1s; font-weight: bold";
                }
            }
        
        scoreText.textContent = `Score: ${playerPoints} vs ${computerPoints}`;
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
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10);
    if (computerChoice <= 3) {
        return 'rock'
    } else if (computerChoice >= 6) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Input one of the following choices: rock, paper, scissors');
    return humanChoice.toLowerCase();
}

function playGame(playRound) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log('Tie. Nobody wins.');
        }   else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('You lose. Paper beats rock.');
            ++computerScore;
        }   else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats scissors.');
            ++humanScore;
        }   else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win! Paper beats rock.');
            ++humanScore;
        }   else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log('Tie. Nobody wins.');
        }   else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('You lose. Scissors beats paper.');
            ++computerScore;
        }   else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('You lose. Rock beats scissors.');
            ++computerScore;
        }   else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissors beats paper.');
            ++humanScore;
        }   else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log('Tie. Nobody wins.');
        }
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    if (humanScore > computerScore) {
        console.log('Game over. You won best out of 5 rounds!')
    } else if (humanScore < computerScore) {
        console.log('Game over. Computer won best out of 5 rounds.');
    } else {
        console.log('Game over. Tie game out of 5 rounds.');
    }
}

playGame();
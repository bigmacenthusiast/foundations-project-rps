function getComputerChoice() {
    let choiceList = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choiceList.length);
    return choiceList[randomChoice];
}

function playRound(playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        return `Tie`;
    } else if (playerChoice === 'rock' && computerChoice === 'paper' || 
               playerChoice === 'paper' && computerChoice === 'scissors' ||
               playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        playerScore++;
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }
}



let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('id');   
        const computerChoice = getComputerChoice();                                                                 
        const result = playRound(playerChoice,computerChoice);
        
        const resultDiv = document.createElement('div');
        resultDiv.textContent = `${result}`;
        document.body.appendChild(resultDiv);

        const scoreDiv = document.createElement('div');
        scoreDiv.textContent = `${playerScore} - ${computerScore}`;
        document.body.appendChild(scoreDiv);

        declareWinner();
        
    });
});
function declareWinner() {
    const winnerAnnouncementElement = document.createElement('div');
    winnerAnnouncementElement.textContent
    document.body.appendChild(winnerAnnouncementElement);
    if(playerScore === 5) {
        winnerAnnouncementElement.textContent = 'Player wins.';
    } else if(computerScore === 5) {
        winnerAnnouncementElement.textContent = 'Computer wins.';
    }
}














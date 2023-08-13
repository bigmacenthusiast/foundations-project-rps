function getComputerChoice(choice) {
    let numberOfChoice = 3;
    let randomCase = Math.floor(Math.random() * numberOfChoice) + 1;

    if (randomCase === 1) {
        choice = "rock";
        return choice;
    }
    else if (randomCase === 2) {
        choice = "paper";
        return choice;
    }
    else {
        choice = "scissors";
        return choice;
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What is your selection?").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "rock") {
        alert("Computer selects rock. It\'s a tie!");
        result = "Tie";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You win! Paper beats rock.");
        result = "Win";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("You lose! Rock beats scissors.");
        result = "Lose";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lose! Paper beats rock.");
        result = "Win";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        alert("Computer selects paper. It\'s a tie!");
        result = "Tie";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("You win! Scissors beats paper.");
        result = "Win";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You win! Rock beats scissors.");
        result = "Win";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("You lose! Scissors beat paper.");
        result = "Lose";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        alert("Computer selects scissors. It\'s a tie!");
        result = "Tie";
    }
    return result;
    
}

console.log(playRound());

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

}



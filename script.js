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

let playerScore = 0;
let computerScore = 0;
let rounds = 5;
let currentRound = 1;

function playRound(playerChoice, computerChoice) {
  console.log(`Welcome to round ${currentRound}!`);  
  playerChoice = prompt(`Round ${currentRound}. Choose Rock, Paper, or Scissors?`).toLowerCase();
  console.log(`Player choses ${playerChoice}.`);
  computerChoice = getComputerChoice();
  console.log(`Computer choses ${computerChoice}.`);

  if (playerChoice === computerChoice) {
    console.log(`It\'s a tie!`);
    console.log(`Score is now Player ${playerScore} - ${computerScore} Computer.`);
    console.log(`Round ${currentRound} ties.`);
    ++currentRound;
    return `Round ${currentRound} ties.`;
  } else if (playerChoice === "rock" && computerChoice === "scissors" ||
                playerChoice === "paper" && computerChoice === "rock" ||
                playerChoice === "scissors" && computerChoice === "paper") {
    console.log(`Player wins. ${playerChoice} beats ${computerChoice}.`);
    playerScore++;
    console.log(`Score is now Player ${playerScore} - ${computerScore} Computer.`);
    console.log(`Round ${currentRound}: Player wins.`);
    ++currentRound;
    return `Round ${currentRound}: Player wins.`;
  } else {
    console.log(`Player loses. ${computerChoice} beats ${playerChoice}.`);
    computerScore++;
    console.log(`Score is now Player ${playerScore} - ${computerScore} Computer.`);
    console.log(`Round ${currentRound}: Player loses.`);
    ++currentRound;
    return `Round ${currentRound}: Player loses.`;
  } 
}

function determineWinner() {
    if (playerScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins! Better luck next time!");
    } else {
        console.log("It\'s a tie! Well played both sides!")
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`Final score - Player: ${playerScore}, Computer: ${computerScore}`);
    determineWinner();
}
game();





let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, scissors, or quit:");

  if (choice === null) {
    return null;
  }

  return choice.trim().toLowerCase();
}

function quitGame(choice) {
  return choice === null || choice === "quit";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }

  console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
}

function playGame() {
  while (true) {
    const humanSelection = getHumanChoice();

    if (quitGame(humanSelection)) {
      console.log("Game ended.");
      break;
    }

    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();

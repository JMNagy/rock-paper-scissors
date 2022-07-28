const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 0; i <= 4; i++) {
    playRound();
  }
  logWins();
  //play the game
  //play five rounds
  //console based
}
function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}
function playerChoice() {
  // get input from the player
  let input = prompt("Type Rock, Paper, or Siccors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Siccors. Spelling needs to be exact, but capitalization doesn't matter."
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}
function computerChoice() {
  // get input from the computer
  return choices[Math.floor(Math.random() * choices.length)];
}
function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  console.log(choiceP, choiceC);
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "siccors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((winner) => winner == "Player");
  let computerWins = winners.filter((winner) => winner == "Computer");
  let ties = winners.filter((winner) => winner == "Tie");
}
game();

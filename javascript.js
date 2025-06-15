alert("Welcome to Rock, Paper, Scissors. First to 5 wins.");

let computerScore = 0;
let humanScore = 0;

// Generate random number between 0 and 2
let getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

// Prompt user for string input and return number between 0 and 2
let getHumanChoice = () => {
  let choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
  if(choice === 'rock'){
    return 0;
  }
  else if(choice === 'paper'){
    return 1;
  }
  else if(choice === 'scissors'){
    return 2;
  }
  else{
    alert("Invalid choice. Try again. ");
    return getHumanChoice();
  }
};

// Convert integer between 0 and 2 to rock paper scissors string
let stringChoice = num => {
  if(num == 0) return "Rock";
  if(num == 1) return "Paper";
  if(num == 2) return "Scissors";
};

// Executes a full round of rps
function playRound(humanChoice, computerChoice){
  if(humanChoice === computerChoice)
  {
    alert("This round was a tie. You both chose " + stringChoice(humanChoice))
  }
  if((humanChoice-computerChoice + 3) % 3 == 1){
    alert("You win! Computer chose " + stringChoice(computerChoice));
    humanScore++;
  } 
  if((humanChoice-computerChoice + 3) % 3 == 2){
    alert("You lose! Computer chose " + stringChoice(computerChoice));
    computerScore++;
  }
}

// Executes 5 rounds of rps and alerts with final score at the end. 
let playGame = () => {
  if(computerScore + humanScore == 5)
  {
    alert(`Game over!\nYour score is: ${humanScore}\nThe computer scored: ${computerScore}`)
  }
  else if(computerScore + humanScore < 5){
    playRound(getHumanChoice(), getComputerChoice());
    playGame();
  }
};

// Entry point into game. 
playGame();
// alert("Welcome to Rock, Paper, Scissors. First to 5 wins.");

// let computerScore = 0;
// let humanScore = 0;

// // Generate random number between 0 and 2
// let getComputerChoice = () => {
//   return Math.floor(Math.random() * 3);
// };

// // Prompt user for string input and return number between 0 and 2
// let getHumanChoice = () => {
//   // let choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
//   if(choice === 'rock'){
//     return 0;
//   }
//   else if(choice === 'paper'){
//     return 1;
//   }
//   else if(choice === 'scissors'){
//     return 2;
//   }
//   else{
//     // alert("Invalid choice. Try again. ");
//     return getHumanChoice();
//   }
// };

// // Convert integer between 0 and 2 to rock paper scissors string
// let stringChoice = num => {
//   if(num == 0) return "Rock";
//   if(num == 1) return "Paper";
//   if(num == 2) return "Scissors";
// };

// // Executes a full round of rps
// function playRound(humanChoice, computerChoice){
//   if(humanChoice === computerChoice)
//   {
//     // alert("This round was a tie. You both chose " + stringChoice(humanChoice))
//   }
//   if((humanChoice-computerChoice + 3) % 3 == 1){
//     // alert("You win! Computer chose " + stringChoice(computerChoice));
//     humanScore++;
//   } 
//   if((humanChoice-computerChoice + 3) % 3 == 2){
//     // alert("You lose! Computer chose " + stringChoice(computerChoice));
//     computerScore++;
//   }
// }

// let totalScore = () => humanScore + computerScore;

// // Executes 5 rounds of rps and alerts with final score at the end. 
// let playGame = () => {
//   let keepPlaying = '';
//   if(totalScore() === 0) playRound(getHumanChoice(), getComputerChoice());
//   do{
//     keepPlaying = prompt("Do you want to keep playing? Y/N ");
//   } while(keepPlaying.toLowerCase() != 'y' && keepPlaying.toLowerCase() != 'n');
//   if(keepPlaying === 'y'){
//     playRound(getHumanChoice(), getComputerChoice());
//   }
//   else{
//     // alert("Thanks for playing. Goodbye!");
//   }
// };

// Entry point into game. 
// playGame();

// Select and create elements
const mainContainer = document.querySelector("#mainContainer");
const background = document.querySelector("#background");
const backgroundImageOne = document.createElement("img");
const backgroundImageTwo = document.createElement("img");
const backgroundImageThree = document.createElement("img");
const imageWrapper = document.createElement("div");
const playerObjects = document.createElement("div");
const rockOne = document.createElement("img");
const paperOne = document.createElement("img");
const scissorOne = document.createElement("img");
const opponentObjects = document.createElement("div");
const paperTwo = document.createElement("img");
const scissorTwo = document.createElement("img");
const rockTwo = document.createElement("img");
const scoreBoard = document.createElement("div");
const playerScore = document.createElement("div");
const opponentScore = document.createElement("div");
const gameText = document.createElement("div");

// Add elements to classList
backgroundImageOne.classList.add("backgroundImageOne");
backgroundImageTwo.classList.add("backgroundImageTwo");
backgroundImageThree.classList.add("backgroundImageThree");
imageWrapper.classList.add("imageWrapper");
playerObjects.classList.add("playerObjects");
rockOne.classList.add("rockOne");
paperOne.classList.add("paperOne");
scissorOne.classList.add("scissorOne");
opponentObjects.classList.add("opponentObjects");
rockTwo.classList.add("rockTwo");
paperTwo.classList.add("paperTwo");
scissorTwo.classList.add("scissorTwo");
scoreBoard.classList.add("scoreBoard");
playerScore.classList.add("playerScore");
gameText.classList.add("gameText");
opponentScore.classList.add("opponentScore");

// Get source for images used 
backgroundImageOne.src = "./images/foggymossyforest.jpg"; 
backgroundImageTwo.src = "./images/psychadelicBackground.jpg";
backgroundImageThree.src = "./images/forestBackground.jpg";
rockOne.src = "./images/rock.png";
paperOne.src = "./images/paper.png";
scissorOne.src = "./images/scissor.png";
rockTwo.src = "./images/rock.png";
paperTwo.src = "./images/paper.png";
scissorTwo.src = "./images/scissor.png";

// Create background effect by tracking mouse location
const track = document.querySelector("#track");
let position = 0;
track.addEventListener('mousemove', (e) => {
  if(e.clientX === 0) return;
  position = (e.clientY / e.clientX);

  sliderTwo = Math.min(0.57, Math.max(0.01, position * 0.1));
  sliderThree = Math.min(0.87, Math.max(0.1, position * 0.2));

  if(backgroundImageTwo)
    backgroundImageTwo.style.opacity = sliderTwo;
  if(backgroundImageThree)
    backgroundImageThree.style.opacity = sliderThree;
});

window.addEventListener('DOMContentLoaded', () => {
  const imageHover = document.querySelectorAll(".playerObjects img");
  console.log("image hover length " + imageHover.length);
  imageHover.forEach(img => {
    img.addEventListener('mouseenter', () =>{
      img.style.transform = "scale(1.1) translateY(-20px)";
      img.style.borderBottom = "3px solid greenyellow"
      img.style.transition = "transform 0.2s ease";
    });
    
    img.addEventListener('mouseleave', () =>{
      img.style.transform = "translateY(0px)";
      img.style.transition = "transform 0.2s ease"
      img.style.borderBottom = "";
    });
  });
});

rockOne.setAttribute("alt", "player rock")
rockTwo.setAttribute("alt", "opponent rock")
paperOne.setAttribute("alt", "player paper")
paperTwo.setAttribute("alt", "opponent paper")
scissorOne.setAttribute("alt", "player scissor")
scissorTwo.setAttribute("alt", "opponent scissor")

mainContainer.appendChild(opponentObjects);
mainContainer.appendChild(scoreBoard);
mainContainer.appendChild(playerObjects);
scoreBoard.appendChild(playerScore);
scoreBoard.appendChild(gameText);
scoreBoard.appendChild(opponentScore);
playerObjects.appendChild(rockOne);
playerObjects.appendChild(paperOne);
playerObjects.appendChild(scissorOne);
opponentObjects.appendChild(rockTwo);
opponentObjects.appendChild(paperTwo);
opponentObjects.appendChild(scissorTwo);
background.appendChild(backgroundImageOne);
background.appendChild(backgroundImageTwo);
background.appendChild(backgroundImageThree);


alert("Welcome to Rock, Paper, Scissors. First to 5 wins.");

let computerScore = 0;
let humanScore = 0;

let totalScore = () => humanScore + computerScore;

// Generate random number between 0 and 2
let getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

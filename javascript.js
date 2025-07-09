// Select and create elements
const mainContainer = document.querySelector("#mainContainer");
const background = document.querySelector("#background");
const backgroundImageOne = document.createElement("img");
const backgroundImageTwo = document.createElement("img");
const backgroundImageThree = document.createElement("img");
const imageWrapper = document.createElement("div");
const playerObjects = document.createElement("div");
const playerRock = document.createElement("img");
const playerPaper = document.createElement("img");
const playerScissor = document.createElement("img");
const opponentObjects = document.createElement("div");
const computerPaper = document.createElement("img");
const computerScissor = document.createElement("img");
const computerRock = document.createElement("img");
const scoreBoard = document.createElement("div");
const playerScore = document.createElement("div");
const opponentScore = document.createElement("div");
const gameText = document.createElement("div");
const gameTextHeader = document.createElement("h2");
const gameTextParagraph = document.createElement("p");
const gameTextParagraphTwo = document.createElement("p");

// Add elements to classList
backgroundImageOne.classList.add("backgroundImageOne");
backgroundImageTwo.classList.add("backgroundImageTwo");
backgroundImageThree.classList.add("backgroundImageThree");
imageWrapper.classList.add("imageWrapper");
playerObjects.classList.add("playerObjects");
playerRock.classList.add("playerRock");
playerPaper.classList.add("playerPaper");
playerScissor.classList.add("playerScissor");
opponentObjects.classList.add("opponentObjects");
computerRock.classList.add("computerRock");
computerPaper.classList.add("computerPaper");
computerScissor.classList.add("computerScissor");
scoreBoard.classList.add("scoreBoard");
playerScore.classList.add("playerScore");
gameText.classList.add("gameText");
opponentScore.classList.add("opponentScore");
gameTextParagraphTwo.classList.add("pulseText");

// Get source for images used 
backgroundImageOne.src = "./images/foggymossyforest.jpg"; 
backgroundImageTwo.src = "./images/psychadelicBackground.jpg";
backgroundImageThree.src = "./images/forestBackground.jpg";
playerRock.src = "./images/rock.png";
playerPaper.src = "./images/paper.png";
playerScissor.src = "./images/scissor.png";
computerRock.src = "./images/rock.png";
computerPaper.src = "./images/paper.png";
computerScissor.src = "./images/scissor.png";

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

playerRock.setAttribute("alt", "player rock");
computerRock.setAttribute("alt", "opponent rock");
playerPaper.setAttribute("alt", "player paper");
computerPaper.setAttribute("alt", "opponent paper");
playerScissor.setAttribute("alt", "player scissor");
computerScissor.setAttribute("alt", "opponent scissor");

mainContainer.appendChild(opponentObjects);
mainContainer.appendChild(scoreBoard);
mainContainer.appendChild(playerObjects);
scoreBoard.appendChild(opponentScore);
scoreBoard.appendChild(gameText);
gameText.appendChild(gameTextHeader);
gameText.appendChild(gameTextParagraph);
gameText.appendChild(gameTextParagraphTwo);
scoreBoard.appendChild(playerScore);
playerObjects.appendChild(playerRock);
playerObjects.appendChild(playerPaper);
playerObjects.appendChild(playerScissor);
opponentObjects.appendChild(computerRock);
opponentObjects.appendChild(computerPaper);
opponentObjects.appendChild(computerScissor);
background.appendChild(backgroundImageOne);
background.appendChild(backgroundImageTwo);
background.appendChild(backgroundImageThree);

let computerScore = 0;
let humanScore = 0;
let round = 1;

let totalScore = () => humanScore + computerScore;
let sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

if(totalScore() <= 0){
  gameTextHeader.textContent = "Welcome to Rock, Paper, Scissors!" 
  gameTextParagraph.textContent = "First to 5 Wins";
  gameTextParagraphTwo.textContent = "Press Enter to Play";
  window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keypress', (e) =>{
      if(e.key === "Enter"){
        gameTextParagraphTwo.remove();
        playGame();
      }
    });
  });
}
else if(computerScore > humanScore){
  gameText.textContent = "The computer is winning!";
}
else if(humanScore > computerScore){
  gameText.textContent = "You are winning!";
}
else{
  gameText.textContent = "It's a tie game!";
}


// Generate random number between 0 and 2
async function getComputerChoice(){
  const computerImages = document.querySelectorAll(".opponentObjects img");
  let ceiling = (Math.floor(Math.random() * 3) + 1) * 4;
  console.log(`ceiling ${ceiling}`)
  for(let i = 0; i < ceiling; i++){
    const img = computerImages[i%3];
    if(ceiling - 1 === i){
      img.classList.add("computerEffect");
      await sleep(750);
      img.classList.remove("computerEffect");
      await sleep(250);
    }
    else{
      img.classList.add("computerEffect");
      await sleep(50);
      img.classList.remove("computerEffect");
      await sleep(50);
    }
  }
  return ((ceiling / 4) - 1);
};

// Prompt user for string input and return number between 0 and 2
let getHumanChoice = () => {
  gameTextParagraph.textContent = "Make Your Choice";
  playerObjects.setAttribute("id", "activeHover");
  return new Promise((resolve) =>{
    let playerRockButton = document.querySelector('.playerRock')
    let playerPaperButton = document.querySelector('.playerPaper')
    let playerScissorButton = document.querySelector('.playerScissor')
    playerRockButton.addEventListener("click", ()=> {
      playerObjects.removeAttribute("id", "activeHover");
      resolve(0);
    }, {once: true});
    playerPaperButton.addEventListener("click", ()=> {
      playerObjects.removeAttribute("id", "activeHover");
      resolve(1);
    }, {once: true});
    playerScissorButton.addEventListener("click", ()=> {
      playerObjects.removeAttribute("id", "activeHover");
      resolve(2);
    }, {once: true});
  });
}

// Convert integer between 0 and 2 to rock paper scissors string
let stringChoice = num => {
  if(num == 0) return "Rock";
  if(num == 1) return "Paper";
  if(num == 2) return "Scissors";
};

// Executes a full round of rps
async function playRound(humanChoice){
  let computerChoice = await getComputerChoice();
  if(humanChoice === computerChoice)
  {
    gameTextHeader.textContent = "You Tied!";
    gameTextParagraph.textContent = `You Both Chose ${stringChoice(humanChoice)}`;
    round++;
    await sleep(800);
    playGame();
  }
  else if((humanChoice-computerChoice + 3) % 3 == 1){
    gameTextHeader.textContent = "You Win!";
    gameTextHeader.style = "color: green";
    gameTextParagraph.textContent = `The Computer Chose ${stringChoice(computerChoice)}`;
    humanScore++;
    round++;
    await sleep(800);
    playGame();
  } 
  else if((humanChoice-computerChoice + 3) % 3 == 2){
    gameTextHeader.textContent = "You Lose!";
    gameTextHeader.style = "color: red";
    gameTextParagraph.textContent = `The Computer Chose ${stringChoice(computerChoice)}`;
    computerScore++;
    round++;
    await sleep(800);
    playGame();
  }
}

// Executes 5 rounds of rps and alerts with final score at the end. 
async function playGame() {
  // let keepPlaying = '';
  gameTextHeader.style = "color: black";
  gameTextHeader.textContent = `ROUND ${round}`;
  opponentScore.textContent = `${computerScore}`;
  playerScore.textContent = `${humanScore}`;
  let humanChoice = 0;
  if(totalScore() === 0){
    humanChoice = await getHumanChoice();
    playRound(humanChoice);
  }
  else if(computerScore < 5 && humanScore < 5){
    humanChoice = await getHumanChoice();
    playRound(humanChoice);
  } 
  else if(humanScore >= 5){
    gameTextHeader.textContent = "You Won The Game!";
    gameTextParagraph.textContent = "Thanks For Playing :)"
  }
  else if(computerScore >= 5){
    gameTextHeader.textContent = "You Lost The Game!";
    gameTextParagraph.textContent = "Better Luck Next Time :("
  }
};
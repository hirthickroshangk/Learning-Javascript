let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let playerMove = localStorage.getItem('playerMove');
let computerMove = localStorage.getItem('computerMove')

document.querySelector('.js-moves').innerHTML = 
  `you
<img src="/pictures/${playerMove}-emoji.png" class="move-img" alt=""> 
<img src="/pictures/${computerMove}-emoji.png" class="move-img" alt="">
computer`;

updateScoreElement();

/* 
if (!score) {
  score = {
    wins: 0,
    losses : 0,
    ties : 0
  }
}
*/

function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) computerMove = "rock";
  else if (randomNumber > 1 / 3 && randomNumber < 2 / 3)
    computerMove = "paper";
  else if (randomNumber > 2 / 3 && randomNumber < 1)
    computerMove = "scissors";
  return computerMove;
}

function calculateResult(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") result = "It's a tie";
    else if (computerMove === "paper") result = "You lose";
    else if (computerMove === "scissors") result = "You win";
  } 
  else if (playerMove === "paper") {
    if (computerMove === "rock") result = "You win";
    else if (computerMove === "paper") result = "It's a tie";
    else if (computerMove === "scissors") result = "You lose";
  } 
  else if (playerMove === "scissors") {
    if (computerMove === "rock") result = "You lose";
    else if (computerMove === "paper") result = "You win";
    else if (computerMove === "scissors") result = "It's a tie";
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "It's a tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();  
  document.querySelector('.js-moves').innerHTML = 
  `you
<img src="/pictures/${playerMove}-emoji.png" class="move-img" alt=""> 
<img src="/pictures/${computerMove}-emoji.png" class="move-img" alt="">
computer`;
  

localStorage.setItem('playerMove',playerMove);
localStorage.setItem('computerMove',computerMove);

  
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, 
  Ties: ${score.ties}`;
}

function resetScore() {
  score.ties = 0;
  score.wins = 0;
  score.losses = 0;
  localStorage.removeItem('score');
  updateScoreElement();

}

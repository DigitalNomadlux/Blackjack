let firstCard = 4;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackjack = true;
  } else {
    message = "Try Again";
    isAlive = false;
  }
  messageEl.textContent = message;
  
}


function drawCard() {
  console.log("Drawing a new card for player")
  let card = 7;
  sum += card;
  startGame();
}
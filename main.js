let firstCard = 4;
let secondCard = 10;
let cards = [firstCard, secondCard];
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
  cardsEl.textContent = `Cards: ${cards[0]}, ${cards[1]}`;
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
  let card = 7;
  sum += card;
  cards.push(card);
  renderGame();
}
let cards = [];
let sum = 0
let hasBlackjack = false;
let isAlive = false;
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function getRandomCard() {
  let randomNum = Math.floor(Math.random()*13)+1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " - ";
  }
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
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
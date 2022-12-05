let firstCard = getRandomCard();
let secondCard = getRandomCard();
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

function getRandomCard() {

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
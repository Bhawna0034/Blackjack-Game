let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let messageEl = document.querySelector("#message-el");
let message = "";

let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

// console.log(sum);

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1; // 1-13
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard + secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?😊";
  } else if (sum === 21) {
    message = "Wohooo, You have won the Blackjack game🥳";
    hasBlackJack = true;
  } else if (sum > 21) {
    message = "You are now out of the game!😭";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// console.log(hasBlackJack);
// console.log(isAlive);

let sum = 0
let isAlive = false
let hasBlackJack = false
let cards = []
let message = ""

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let cardValue = Math.floor(Math.random() * 13) + 1
    if (cardValue === 1) {
        return 11
    } else if (cardValue > 10) {
        return 10
    } else {
        return cardValue
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    renderGame()
}

function newCard(){
    // console.log("Drawing a new card from the deck!")
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}

let isDark = false; // This variable tracks the current state
const body = document.body; // Get a reference to the body element

function toggleDarkMode() {
    if (isDark) {
        body.style.backgroundImage = "url('resources/background.jpg')"; 
        isDark = false;
    } else {
        body.style.backgroundImage = "none";
        // body.style.backgroundColor = "black";
        isDark = true;
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Whoo! You've got Blackjack!"
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
};

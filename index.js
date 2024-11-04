let firstCard = 5
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    renderGame()
}

function newCard(){
    // console.log("Drawing a new card from the deck!")
    let newCard = 5
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

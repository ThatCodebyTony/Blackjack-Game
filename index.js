let firstCard = 5
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function newCard(){
    // console.log("Drawing a new card from the deck!")
    let newCard = 5
    sum += newCard
    startGame()
}

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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

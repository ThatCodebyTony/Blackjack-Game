let firstCard = 2
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card? 👍"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Whoo! You've got Blackjack! 💕"
    } else {
        message = "You're out of the game! 🤷‍♂️"
        isAlive = false
    }
};

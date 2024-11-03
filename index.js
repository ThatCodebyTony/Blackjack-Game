let firstCard = 2
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum < 21) {
    console.log("Do you want to draw a new card? 👍")
} else if (sum === 21) {
    console.log("Whoo! You've got Blackjack! 💕")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 🤷‍♂️")
    isAlive = false
}
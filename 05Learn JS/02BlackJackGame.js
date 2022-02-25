// isAlive to check state of our code with variable as a Boolean
let firstCard = 10
let secondCard = 13
let sum = firstCard + secondCard
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true

// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

// 3. Log it out to check that you're doing it right
console.log(hasBlackJack);
console.log(isAlive);


//// Practicing Boolean Conditions
console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

// // Add variable message and pass in place of functions => console.log and then invoking at last in console.log
// let message = ''

// fnctn {
//     message = 'Do you want to draw a new card? 🙂'
// } ....

// console.log(message)


// // Query selector 
let sumEl = document.querySelector("#sum-el")
sumEl.textContent + = sum;
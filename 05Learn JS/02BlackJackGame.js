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
// let sumEl = document.querySelector("#sum-el")
// sumEl.textContent + = sum;
// <<For id we use # , class use . >>



//// Invoking when card is click and add hardcode value
function newCard() {
    let card= 6
    sum += card
    startGame()
}


///// Arrays => list of item

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])


/// Adding & removing items from arrays 
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)


// // Loops & Arrays
for (let i = 10; i < 101; i += 10) {
    console.log(i)
}
// you always forget defining variable in loop

let cards = [7, 3, 9]
// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}


// // Proper Implementation
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent = greetingEl.textContent + " " + sentence[i]
}

// // Return values in funcs


// // Math random concept
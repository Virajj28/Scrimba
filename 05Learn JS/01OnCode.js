//  Writing a first variable

// let myAge = 2;
// console.log(myAge)

// function increment
{/* <button id="incr-btn">Increment</button>

function increment () {
    console.log("the btn is clickd")
} */}

// To less write code for console we use functions and then it is invoked.
// function countdown () {
//     console.log(2)
//     console.log(1)
// }

// countdown();
// countdown();

// change the count-el in the HTML to reflect the new count

// let count = 0

// function increment() {
//     document.getElementById("count-el").innerText = count + 1
// }

let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count = count + 1;
    countEl.innerText = count
}

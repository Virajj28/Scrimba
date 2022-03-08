// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

// let box = document.getElementById("box")

// box.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })


let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// Log out the items in the myLeads array using a for loop 
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.textContent += myLeads[i] + ""
// }


//// Rendering <li> with innerHTML
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

// Let's try a different method!
for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content
    // append to ul
    const li = document.createElement("li")
    li.textContent = myLeads [i]
    ulEl.append(li)
}

// // Use .innerHTML to render a Buy! button inside the div container
// const container = document.getElementById("container")

// container.innerHTML = "<button>Buy!</button>"


container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy(){
    container.innerHTML += "<p>Thank you for buying!</p>"
}
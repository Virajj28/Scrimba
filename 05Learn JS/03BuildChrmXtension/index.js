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
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)

    // Clear out the input field after the value is pushed 
    // Also another methods onfocus=this.value='' 
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    // 2. Call the renderLeads() function
    render(myLeads)
})


// Log out the items in the myLeads array using a for loop 
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.textContent += myLeads[i] + ""
// }


//// Rendering <li> with innerHTML
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

//// Let's try a different method!
// for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     // create element
//     // set text content
//     // append to ul
//     const li = document.createElement("li")
//     li.textContent = myLeads [i]
//     ulEl.append(li)
// }


///// Improving performance
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// Render fnc when button is hit
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        // listItems += "<li>" + myLeads[i] + "</li>"

        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += 
        `<li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}


// // Use .innerHTML to render a Buy! button inside the div container
// const container = document.getElementById("container")

// container.innerHTML = "<button>Buy!</button>"


// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"

// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }


//// Storing arrays in localStorage

// let myLeads = `["www.awesomelead.com"]`
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)


///// Save the leads to localstorage
myLeads.push(inputEl.value)
inputEl.value = ""
// Save the myLeads array to localStorage 
// PS: remember JSON.stringify()
localStorage.setItem("myLeads", JSON.stringify(myLeads) )
renderLeads()

// To verify that it works:
console.log( localStorage.getItem("myLeads") )


///// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
localStorage.clear()
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsFromLocalStorage)

// ["lead1", "lead2"] or null
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//// Add Event Listener onDblClick

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


////
const tabs = [
    {url: "https://www.linkedin.com/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
// tabBtn.addEventListener("click", function(){
//     // console.log(tabs[0].url)
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         // since only one tab should be active and in the current window at once
//         // the return variable should only have one entry
//         let activeTab = tabs[0]
//         let activeTabId = activeTab.id // or do whatever you need
//     })
//     ////Save into localStorage
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//     render(myLeads)
// })


//// Use ChromeAPI to get an active tab's URL
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
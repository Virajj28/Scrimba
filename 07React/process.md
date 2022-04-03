Don't fall in Tutorial Hell
Revise and Take a break it's okay to redo past lessons.

1=> Learn to 'think in React'

Why React ? It's declarative
// React is declarative
ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

// Vanilla JS is imperative
/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).
- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
*/

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
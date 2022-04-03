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


//// React Theoretical Quiz
1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger/greater than the individual pieces.

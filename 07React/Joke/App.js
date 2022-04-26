import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

export default function App() {
    const colors = [
        <h3>Red</h3>, 
        <h3>Orange</h3>, 
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>
    ]

    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })

    return (
        <div>
            {colors}
            <br />
            {jokeElements}
        </div>
    )
}
import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
/**
 * Challenge: Build the Header component
 */
export default function App() {
    function handleClick() {
        console.log("clicked")
    }

    function handleOnMouseOver() {
        console.log("MouseOver")
    }

    return (
        <div>
            <Header />  
            <Meme />
            <div>
                <img
                    src="https://picsum.photos/640/360" 
                    onMouseOver={handleOnMouseOver} 
                />
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
}

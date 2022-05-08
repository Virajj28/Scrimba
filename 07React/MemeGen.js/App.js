import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
/**
 * Challenge: Build the Header component
 */
export default function App() {

    // const result = React.useState("Yes")
    // console.log(result)
    const [isImportant, setIsImportant] = React.useState('Yes')
    console.log(isImportant)

    function handleClick() {
        console.log("clicked")
    }

    function handleOnMouseOver() {
        console.log("MouseOver")
    }

    function handleClick() {
        setIsImportant("No")
    }

    return (
        <div>
            <Header />  
            <Meme />
            {/* <h1>{result[0]}</h1> */}
            <h1>{isImportant}</h1>
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

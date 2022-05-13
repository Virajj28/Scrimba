import React from "react"

export default function App() {
    const isGoingOut = true
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>

            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    )
}

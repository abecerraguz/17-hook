import React, { useState } from 'react'

const App = () => {
    const [number, setNumber] = useState(10)
    //USE STATE CON STRING
    const [text, setText] = useState('')

    const handleIncrement = () => {
        setNumber(number + 1)
    }

    const handleDecrement = () => {
        setNumber(number - 1)
    }

    const handleReset = () => {
        setNumber(0)
    }
    /* USE STATE CON STRING */
    const handleInput = (e) => {
        setText(e.target.value)
    }


    return (
        <>
            <h1>Number: {number}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
             {/* USE STATE CON STRING */}
            <p>Contenido del input {text}</p>
            <input type="text" onChange={handleInput} />
        </>
    );
}


export default App;
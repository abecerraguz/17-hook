import React, { useState } from 'react'

// Si no llega la defaultProps por defecto entonces se mostrara 23
const App = ({ initialNumber = 23 }) => {

    // state = { number: 10 }
    // const state = useState(0)
    // const number = state[0]
    // [state, ()setState]
    
    // Pero Ojo prevalece 10
    const [number = initialNumber, setNumber] = useState(10)

    const handleIncrement = () => {
        // this.setState({
        //     number: this.state.number + 1
        // })
        setNumber(number + 1)
    }

    const handleDecrement = () => {
        // this.setState({
        //     number: this.state.number - 1
        // })
        setNumber(number - 1)
    }

    const handleReset = () => {
        // this.setState({
        //     number: 0
        // })
        setNumber(0)
    }
    return (
        <>
            <h1>Number: {number}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}


export default App;
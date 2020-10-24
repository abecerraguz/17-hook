import React, { Component } from 'react'

class App extends Component {

    state = { number: 10 }

    handleIncrement = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    handleReset = () => {
        this.setState({
            number: 0
        })
    }

    render() {
        return (
            <>
                <h1>Number: {this.state.number}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </>
        );
    }
}

App.defaultProps = {
    number: 0
}


export default App;
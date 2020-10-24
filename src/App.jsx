import React, { Component } from 'react'


/*
    En esta sección vamos a empezar a trabajar a través de los HOOKS.
    Es algo que ha llegado recientemente React.
    Como ven están disponibles desde la versión 16.8 y nosotros ahora mismo cuando instalamos un proyecto
    de REACT estamos con la 16:13 o sea que como ven hace muy poquitas versiones que lo introdujeron.

    Básicamente los Hooks es poder utilizar el Estado (state) pero sin utilizar clases entonces esto nos facilita muchísimo la vida tanto a desarrolladores como a las máquinas.

    Cuando nosotros escribimos una clase como las clases no existen como tal en los navegadores pues lo que hay que hacer es compilar el código de forma que se utilice algo similar a una clase o que el navegador pueda entender lo que es una clase y eso genera demasiado código.

    Cuando tenemos un proyecto mediano.

    Entonces viendo poco a poco lo que son los Hooks vais a ver que es una forma de trabajar muchísimo más cómoda porque no sólo escribimos menos código sino que es muchísimo más intuitivo y mucho más fácil de depurar.

    Esto no significa que las clases vayan a desaparecer.

    De momento REACT ha dicho que las clases se van a seguir utilizando y que van a estar disponibles sin ningún tipo de problema pero que todos los desarrollos nuevos recomiendan hacerlos a través de HOOKS.

    Todos los conceptos que hemos visto sobre el ciclo de vida props todo eso sigue funcionando exactamente igual.

    Eso no ha cambiado sólo que a través de HOOK los vamos a utilizar de una forma distinta que como los utilizábamos con clases en el siguiente vídeo vamos a hacer la pequeña introducción a HOOKS viendo cómo se utiliza el primero de los HOOKS.
*/


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
import React, { useState, useEffect } from 'react'

const App = () => {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const handleCounter1 = () => setCounter1(counter1 + 1)
    const handleCounter2 = () => setCounter2(counter2 + 1)

    /*

    Creamos nuestro UseEffect
    Creamos un console.log(), cuando se refresca la pagina el console.log muesra que 
    el componente se ha montado.

    Ahora si hacemos click en el contador1 y en el contador2 el componentDidmount vuelve a cargarse
    , pero hay veces que no vamos a desar que se vuelva a cargar nuevamente el componete , para ello tenemos
    algo que se llama control de dependencias.

    Este control de dependencias se pone después de la llave un array [], si este esta vacio este sólo va a cargar 
    una sola ves el componentDidMount una ves.

    Si necesitamos que alguna dependencia se vuelva a ejecutar esto lo controlamos dentro del Array.

    useEffect(() => {
        console.log('USE EFFECT')
    }, [counter1, counter2]);

    Esto es importante porque en el siguiente video vamos a ver cómo hacer peticiones HTTP y es muy importante que sepáis cómo controlar el orden de ejecución de useEfect . para no hacer peticiones infinitas exactamente igual que con las clases.

    Por qué si os acordáis con las clases teníamos que utilizar un condicional para no hacer peticiones una detrás de otra sin control.

    */
    
    useEffect(() => {
        console.log('USE EFFECT')
    }, [counter1, counter2]);

    return (
        <>
            <h2>Counter 1: {counter1}</h2>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={handleCounter1}>Counter 1</button>
            <button onClick={handleCounter2}>Counter 2</button>
        </>
    );
}


export default App;
import React, { useState, useEffect } from 'react'

/*
Vamos a hablar sobre el segundo Hook que más se va a utilizar en React este Hook 
vamos a importarlo aquí en React useEffect y para que se entienda este Hook es 
para emular el ciclo de vida que teníamos en las clases.

    componentDidMount
    componentDidUpdate
    componentWillUnmount

useEffect es un función por lo que reciebe un callBack

 useEffect(() => {

     // componentDidMount 
     // Lo primero que reciebe es un componenDidmount o sea monta el componente 
     console.log('MOUNTED')

     // componentDidUpdate
     // Lo segundo que recibe es componentDidUpdate este permite actualizar el montaje del componente  
     const time = setInterval(() => setDate(new Date().toLocaleTimeString()), 1000)
     
     //componentWillUnmount
     // El tercer es el desmontaje del componente este lo limpia cada ves que se ejecuta lo que permite que se actualice el reloj.
     
     return () => {
        clearInterval(time)
     }

 });



*/



const App = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())


    useEffect(() => {
        //componentDidMount
        console.log('MOUNTED')
        //componentDidUpdate
        const time = setInterval(() => setDate(new Date().toLocaleTimeString()), 1000)
        //componentWillUnmount
        return () => {
            clearInterval(time)
        }
    })

    return (
        <h1>{date}</h1>
    );
}


export default App;
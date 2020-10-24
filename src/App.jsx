// Se utiliza el Hook useState
import React, { useState } from 'react'

/*
Como primera toma de contacto con los HOOKS lo que he hecho ha sido coger el ejercicio este que habíamos hecho bastante sencillo y simplemente copiado y pegado y no he modificado apenas nada simplemente que el Estado que lo teníamos pasado por props ahora lo he declarado aquí directamente lo que vamos a hacer es convertir esta clase en un HOOKS.

Lo primero es que creeís el proyecto 11 HOOKS y copias el proyecto 05 me parece que si el proyecto 05 lo copia y lo adaptas y os tiene que quedar como a mi.

De todas formas en la carpeta de recursos tenéis un archivo que se llama proyecto inicial. Con esta carpeta ese recé para que las copias si no queréis perder nada o no os queréis arriesgar a copiar y pegar entonces empezando desde este punto vamos a convertir esta clase en un HOOKS.

Lo primero es que la clase a Pepe extent component ya no va a ser una clase va a ser una función por lo tanto esto va a ser cons Apep y esto va a ser igual a una función de flecha.

Por lo tanto component ya no nos hace falta tenemos que utilizar el jug de Estado y ese jug se llama y US estais todos los CUCSH empiezan por la palabra ñus y después lo que hacen entonces.

De momento vamos a ver solo y Eisenstaedt que es el que nos permite utilizar un Estado dentro de dos funciones si ahora guardo esto evidentemente va a dar un error porque porque faltan muchas cosas por hacer pero en principio necesitáis esto importar React y el jug y os estais después.

Esto de Strait Number 10 ya no lo vamos a declarar así para declarar un estado voy a comentar esto y aquí debajo vamos a poner Yus Strait y esto es una función que recibe como parámetro el estado inicial en este caso cero.

O para que fuera igual. 10 y así lo tendriamos igual este y estais 10 equivale al Estay Number 10 cuando nosotros hacemos esto si lo guardamos en una variable Strait por ejemplo

esto devolvería una raíz con dos posiciones es decir tendríamos una Rey con el con el Estado y después tendríamos una función que equivaldría al set estricto.

Esto es lo que tendríamos en el array que devuelve el utilizar la función y la forma más normal de declarar un estado es estructurando esto.

Por lo tanto lo que se suele hacer es estructurar el array y aquí pondríamos el nombre de nuestro Estado. En este caso sería Manver y como segundo parámetro la función que nos va a ayudar o que nos va a servir para actualizar ese número se suele poner set y el nombre del Estado que tenemos en este caso set Vlambeer por convención. Esta es la forma más cómoda de hacerlo.

También podría poner const number igual a y uses Toit bueno habría que guardar el Estado perdón es que esta forma no la suelo hacer entonces const estoy igual y se esté de cero y podríais poner con number igual a cero.

Esta sería otra forma de hacerlo pero ya os digo que lo más habitual es que lo veáis escrito así entonces.

Esto lo voy a comentar para que no os confunda y esto lo voy a subir aquí arriba nosotros Hannan ver ahora mismo tenemos guardado un 10 que es el estado por defecto vamos a imprimir aquí en Amber en lugar de disputo estoy punto Lambeth lo que tenemos que poner es simplemente Lambeth esa va a ser nuestra variable nuestra función render ya no hace falta porque no estamos con clases entonces nos la cargamos el return si hace falta y de momento voy a comentar esto simplemente para que veáis lo que está pasando.

Voy a comentar estas funciones también guardamos y como veis aquí tenemos nuestro estado.

Este 10 equivale a este 10 si ya que en lugar de 10 pusiera 100 pues nuestro estado inicial sería 100.

Vamos a dejar esto así y vamos a des comentar el primer botón Voy a quitar esto de aquí y a ponerlo aquí ya tenemos este primer botón que de momento nos está dando un fallo porque no existe la propiedad del incremento.

Vamos a quitar el gris porque como no estamos con clases ya no hace falta el aldiz y esto que tenemos aquí nuestra función del incremento tenemos que guardarla en una constante.

Por lo tanto con el incremento igual a esto de aquí para actualizar el estado tenemos esta función que hemos creado.

Entonces esto simplemente vamos a comentarlo y vamos a poner set number y como parámetro simplemente le tenemos que decir lo que tiene que hacer que en este caso va a ser number +1 guardamos y si hacemos clic en incremento.

Como veis funciona perfectamente. Esto es una forma bastante más sencilla de actualizar el estado y de trabajar con el Estado como podéis ver vamos a hacer lo mismo con las otras.

Vamos a comentar esto vamos a poner const Jahn del decremento.

Esto lo comento y aquí debajo vamos a poner shed number y esto va a ser number menos 1 guardamos.

Voy a comentar esto para tener disponible el botón y el bis fuera.

Y como veis ya tenemos estos dos botones funcionando y el último pues sería muy sencillo de hacer.

Esto lo guardamos en una constante esto ya no hace falta y aquí simplemente ponemos set number y number.

Bueno aquí no habría que poner.

A qué habría que poner el Estado directamente.

Aquí le estamos diciendo que el Estado va a ser cero.

Vamos a comentar aquí.

Quitamos el Vips guardamos y si yo hago clic en Reset como veis se pone a cero.

Aquí simplemente estamos pasando el valor porque al utilizar set number él ya sabe que está actuando sobre la propiedad number porque pertenecen al mismo array de USA Strait.

Por lo tanto no tenemos que indicar cuál es la propiedad que vamos a actualizar porque esto ya está unido entonces es una forma muchísimo más cómoda de trabajar.

Y como veis hace falta muchísimo menos código para conseguir lo mismo.

*/



// La clase desaparece y se convierte en funcion de flecha
const App = () => {
    /*
       Esta es la forma de definir el estado a través de las clases.
       state = { number: 10 }

       En los Hook la forma de definir el estado se puedes hacer a través de una destructuración, por ejemplo:
       const state = useState(0)
       const number = state[0]

       Esto nos devuelve un Array 
       [state, ()setState]

       Ahora la forma final para definir un state es 
       const [number, setNumber] = useState(10)
    */
 
    const [number, setNumber] = useState(10)

    /*
        Ahora para definir e incrementar el setNumber se realiza a través de un arrow function definido en 
        una constante
    
    */
    const handleIncrement = () => {
    // this.setState({
    // number: this.state.number + 1
    // })
        setNumber(number + 1)
    }

    const handleDecrement = () => {
    // this.setState({
    // number: this.state.number - 1
    // })
        setNumber(number - 1)
    }

    const handleReset = () => {
    // this.setState({
    // number: 0
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

App.defaultProps = {
    number: 0
}


export default App;
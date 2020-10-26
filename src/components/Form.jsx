import React, { useState } from 'react'

const Form = () => {
    //Se crea un estdo que contiene un objeto
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setValues({
            // Uso de String Operator que sirve cuando hay mas de un campo
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="text"
                />
            </div>
            <p>{JSON.stringify(values)}</p>
        </form>
    )
}

export default Form

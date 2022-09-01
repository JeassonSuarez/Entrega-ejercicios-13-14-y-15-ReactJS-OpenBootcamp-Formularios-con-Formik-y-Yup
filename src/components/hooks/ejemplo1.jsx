/**
 * ejemplo de uso del hooks useState
 *
 * crear un componente de tipo funcion y accede a su estado privado a traves de un hooks
 * y ademas poder modificarlo
 *
 * */

import React, { useState } from 'react';

const Ejemplo1 = () => {


    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre: 'Jeasson',
        email: 'example.email@gmail.com'
    };

    /**
     * Queremos que el VALOR INICIAL Y PERSONA INICIAL sean parte del estado del componente
     * para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    const incrementarContador = () =>{
        setContador(contador + 1);
    };

    /**
     * Funcion para actualizar el estado de persona ene l componente
     */

    const actualizarPersona = () => {
        setPersona(
            {
                nombre: 'Alfonso',
                email: 'example.email@gmail.com'
            }
        );
    }


    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de persona:</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>
            {/* bloque de botones para actualizar el estado */}
            <div>
                <button onClick={ incrementarContador }>Incrementar Contador</button>
                <button onClick={ actualizarPersona }>Actualizar persona</button>
            </div>
        </div>
    );
};

export default Ejemplo1;

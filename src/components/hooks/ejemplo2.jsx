/**
 * ejemplo de uso de
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, { useState, useEffect, useRef } from 'react';

const Ejemplo2 = () => {

    // vamos a crear dos ccontadores distintos, cada uno en un estado diferente
    const [contadorUno, setContadorUno] = useState(0);
    const [contadorDos, setContadorDos] = useState(0);

    //vamos a crear una referencia con useRef() para asociar
    //una variable con un elemento del dom del componente (vista html)
    const miRef = useRef();

    const incrementarContadorUno = () => {
        setContadorUno( contadorUno+1 );
    };

    const incrementarContadorDos = () => {
        setContadorDos( contadorDos+1 );
    };

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? caso 1: ejecutat siempre un snippet de codigo
     * cada vez que haya un vambio en el estado del componente se ejecuta
     * aquello que esta dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando referencia a elemento del dom:");
    //     console.log(miRef);
    // });

    /**
     * ? caso 2: ejecutar solo en algunos caso, por ejemplo solo cuando cambia
     * el contador uno
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del contador uno");
    //     console.log("Mostrando referencia a elemento del dom:");
    //     console.log(miRef);
    // },[contadorUno]);

    /**
     * ? caso 3: Ejecutar ejecutar solo en algunos caso, por ejemplo solo cuando cambia
     * el contador uno o el contador dos
     */

    useEffect(() => {
        console.log("Cambio en el estado del contador uno o contador dos");
        console.log("Mostrando referencia a elemento del dom:");
        console.log(miRef);
    }, [contadorUno, contadorDos]);

    


    return (
        <div>
            <h1>Ejemplo de useState(), useEffect(), y useRef()</h1>
            <h2>Contador Uno: { contadorUno }</h2>
            <h2>Contador Dos: { contadorDos }</h2>
            {/* Elemento referenciado */}
            <h4 ref = { miRef }>
                Ejemplo de elemento referenciado
            </h4>
            {/* bloque de botones para actualizar el estado */}
            <div>
                <button onClick={ incrementarContadorUno }>Incrementar Contador Uno</button>
                <br></br>
                <button onClick={incrementarContadorDos }>Incrementar Contador Dos</button>
            </div>
        </div>
    );
}

export default Ejemplo2;

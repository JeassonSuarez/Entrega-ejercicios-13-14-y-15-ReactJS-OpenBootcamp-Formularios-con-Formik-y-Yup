/**
 * ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            {/* la idea es que este componente pinte las props.children donde se pinte el componente,
            pintara entonces lo que hay entre apertura y cierre del componente*/}
            <h1>****Ejemplo de children props****</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintara por defecto, aquello que se
            necunte entre las etiquetas de apertura y cierre de
             este componente desde el componente de orden superior */}
            { props.children }
        </div>
    );
}

export default Ejemplo4;

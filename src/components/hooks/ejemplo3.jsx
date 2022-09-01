/**
 * ejemplo hooks de useState(), y useContext(); importantes para el trabajo con datos, para
 * pasar a componentes inferiores
 */

import React, {  useState, useContext } from 'react';

/**
 * dispone de un contexto que va a tener un valor que recibe desde el padre
 */
const miContexto = React.createContext(null);

const ComponenteUno = () => {

    /*
        inicializamos un estado vacio que va a rellenarse con los datos del contexto padre
    */
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: { state.token }</h1>
            {/* pintamos el componente dos */}
            <ComponenteDos />
        </div>
    );
};

const ComponenteDos = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesion es: { state.sesion }</h2>
        </div>
    );
};


export const ComponenteTres = () => {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setSesionData({
            token: 'jwt123456789',
            sesion: sesionData.sesion + 1
        });
    }



    return (
        <miContexto.Provider value={sesionData}>
            {/* Todo lo que esta aqui dentro puede leer los datos de sesion data ademas de actualizarse */}
            {/* ademas si se actualiza, los componentes de aqui, tambien lo actualizan */}
            <h1>**** ejemplo de useState() y useContext()****</h1>
            <ComponenteUno />
            <button onClick={ actualizarSesion }>Actualizar sesion</button>
        </miContexto.Provider>
    );
};

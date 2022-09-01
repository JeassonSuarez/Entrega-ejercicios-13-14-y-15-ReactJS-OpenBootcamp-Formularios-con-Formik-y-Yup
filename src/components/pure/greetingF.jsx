import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //breve introduccion a use state, permite crear un estado privado para el componente
    // [variable, metodo para actualizar] = useState(valor inicial)
    const [age, setAge] = useState(24);
    const birthday = () => {
        //actualizar el estado
        setAge(age + 1)
    }

    return (
        <div>
                <h1>!Hola { props.name } desde componente funcional¡</h1>
                <h2> Tu edad es de: { age } años</h2>
                <div>
                    {/* cuando se presione el boton se realiza un cambio de estado */}
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {

};


export default GreetingF;

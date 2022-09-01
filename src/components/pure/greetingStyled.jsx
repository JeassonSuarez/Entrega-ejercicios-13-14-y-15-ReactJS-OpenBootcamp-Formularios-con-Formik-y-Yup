import React, { useState } from 'react';

/** definiendo estilos utilizando constantes */

// estilos para usuario logueado
const loggedStyle = {
    color:'white'
}

//estilos para usuario no logueado
const unLoggedStyle = {
    color:'tomato',
    fontWeight:'bold'
}



const GreetingStyled = (props) => {

    // generamos un estado para el componente y
    // asi controlar si el usuario esta logueado
    const [logged, setLogged] = useState(false);

    //elementos que seran renderizados dependiendo el login
    const greetingUser = <p>Hola, { props.name }</p>;
    const pleaseLogin = <p>Please login</p>

    return (
        <div style={ logged ? loggedStyle : unLoggedStyle}>

            {/** renderizado condicional */}
            {
            logged
            ? greetingUser
            : pleaseLogin
            }


            {/* <p>Hola, { props.name }</p> */}
            <button onClick = { () => {
                logged
                ? setLogged(false)
                : setLogged(true)
            } }>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;

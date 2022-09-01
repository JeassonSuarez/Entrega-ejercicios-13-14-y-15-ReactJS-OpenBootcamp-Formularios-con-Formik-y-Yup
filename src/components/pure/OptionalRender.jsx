import React, { useState } from 'react';

// rgb
let red=0, green=200, blue=150;

// estilos para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color:'white',
    fontWeight:'bold'
}

//estilos para usuario no logueado
const unLoggedStyle = {
    color:'white',
    backgroundColor:'tomato',
    fontWeight:'bold'
}

// login logout buttons
const LoginBtn = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={ loginAction }>Login</button>
    );
};

const LogoutBtn = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={ logoutAction }>Logout</button>
    );
};



const OptionalRender = () => {

    const [acceso, setAcceso] = useState(true);
    const [nmessage, setNmessage] = useState(0);

    const loginAction = () => {
        setAcceso(true);
    };
    const logoutAction = () => {
        setAcceso(false);
    };

    let optionalBtn

    // unread message
    let addMessage = () => {
        setNmessage(nmessage+1);
    }

    acceso
    ? optionalBtn=<LogoutBtn logoutAction={ logoutAction } propStyle={ unLoggedStyle }/>
    : optionalBtn=<LoginBtn loginAction={ loginAction } propStyle={ loggedStyle }/>;

    return (
        <div>
            {/** optinal btn */}
            { optionalBtn }

            {/* nmessage unread */}
            {acceso
            ? <div>
            {/* { (nmessage > 0 && nmessage===1) && <p> You have {nmessage} message unread</p> }
            { (nmessage > 1) && <p> You have {nmessage} messages unread</p> }
            { nmessage === 0 && <p> There are no new messages</p> } */}
            {/* ternary opertor */}
            { nmessage > 0 && nmessage === 1
                ? <p> You have {nmessage} message unread </p>
                : nmessage > 1
                    ? <p> You have {nmessage} messages unread </p>
                    : <p> There are no new messages</p>}
            <button onClick={addMessage}>{ nmessage === 0 ? 'Add your first message' : 'Add Message' }</button>
            </div>
            : null}
            
        </div>
    );
}

export default OptionalRender;

//  ? expresion true && elemento se renderiza el elemento
// ? expresion false && elemento no se renderiza el elemento



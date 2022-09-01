import React, { useRef } from 'react';


//  se recibe los manejadores de eventos y un nombre, desde el padre, de manera que se actualizan los padres desde los hijos
export const Child = ( { name, send, update } ) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    const pressBtn = () => {
        const text = messageRef.current.value
        alert(`input text: ${ text }`)
    }

    const pressBtnParams = (text) => {
        alert(`Text: ${text}`);
    }

    const submitName = (e) => {
        e.preventDefault();
        update(nameRef.current.value)
    };

    return(
        <div style={{backgroundColor:'grey', padding:'30px'}}>
            <p onMouseOver={ ()=>{console.log('On Mouse Over')} }>Hello { name }</p>
            <button onClick={ ()=>{console.log('pressBtn 0')} }>btn 0</button>
            <button onClick={ pressBtn }>btn 1</button>
            <button onClick={ pressBtnParams }>btn 2</button>
            {/* a continuacion se soluciona el problema de ejecucion apenas carga el don, utilizando una funcion anonima */}
            <button onClick={ () => pressBtnParams('hola') }>btn 3</button>
            <input
            ref= { messageRef }
            type="text"
            placeholder="Send a text to your father"
            onChange={ (e) => { console.log('Evento onChange: ',e.target.value)}}
            />
            {/* al presionar el boton se ejecutara la funcion que se esta recibiendo por props, como si send = showMessage */}
            {/* es decir se ejecuta el prop send que se recibe desde el padre, o sea se ejecuta una funcion desde el padre a partir del hijo */}
            <button onClick={ ()=>send(messageRef.current.value) }>send message</button>
            <div style={ {marginTop:'20px', backgroundColor:'grey'} }>
                <form onSubmit={ submitName }>
                {/*se usa una referencia para ser enviada al padre  */}
                    <input ref={ nameRef } type='text' placeholder='new name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}
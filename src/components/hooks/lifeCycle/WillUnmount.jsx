/**
 * Ejemplo de uso del metodo componentWillUmmount para componente clase y para hook componente funcional
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {
    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca');
    }
    render() {
        return (
        <div>WillUnmount</div>
        )
    }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        //no se pone nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            WillUnMount
        </div>
    );
}



/**
 * Ejemplo de uso de metodo DidUpdate en componente clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado');
    }
    render() {
    return (
      <div>DidUpdate</div>
    )
  }
}


export function DidUpdateHook() {
  useEffect(() => {
    console.log('Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado');
  });
  return (
    <div>DidUpdateHook</div>
  )
}


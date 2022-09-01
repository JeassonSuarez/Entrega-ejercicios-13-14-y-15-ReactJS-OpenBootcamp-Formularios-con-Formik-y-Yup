/** 
 * ejemplo de componente de tipo clase que dispone de los
 * metodos de ciclo de vida de los componentes
 */

import React, { Component } from 'react'

export default class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor: Cuando se instancia el componente");
    }

    componentWillMount() {
        console.log("WILLMOUNT: antes del montaje del componente");
    }

    componentDidMount() {
        console.log("DIDMOUNT: justo al acabar el montaje del componente antes de pintarlo");
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps){
        /**
         * sirve para controlar si el componente debe o no actualizarse
         */
        // return true | false;
    }

    componentWillUpdate(){
        console.log('WILLUPDATE: Justo antes de actualizarse, esta depreciado');
    }

    componentDidUpdate(){
        console.log('DIDUPDATE: Justo depues de actualizarse');
    }

    componentWillUnmount() {
        console.log('WILLUMMOUNT: Justo antes de desaparecer');
    }

    render() {
    return (
        <div>lifeCycleExample</div>
    )
    }
}

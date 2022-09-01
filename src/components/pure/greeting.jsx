import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        {/* informacion privada que puede modificarse */}
        this.state = {
            age : 24
        };
    }

    render() {
        return (
            <div>
                <h1>!Hola { this.props.name } desde componente de clase¡</h1>
                <h2> Tu edad es de: { this.state.age } años</h2>
                <div>
                    {/* cuando se presione el boton se realiza un cambio de estado */}
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    // se realiza un cambio en el estado, y esto genera una nueva renderizacion del componente saludo
    birthday = () => {
        this.setState((prevState)=>({
            age: prevState.age + 1
        }))
    }

}

// contenido que le puedo pasar a un componente desde un componente de orden superior
// sirven para especificar tipos de datos que se estan pasando
Greeting.propTypes = {
    name: PropTypes.string
};


export default Greeting;

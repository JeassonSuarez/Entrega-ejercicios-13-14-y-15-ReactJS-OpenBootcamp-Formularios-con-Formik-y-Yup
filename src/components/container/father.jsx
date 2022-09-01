import React, { useState } from 'react';
import { Child } from '../pure/child';


export const Father = () => {

    const showMessage = (message) =>{
        alert('Message recived: '+message);
    }

    const [name, setName] = useState('');

    const updateName = (newName) => {
        setName(newName);
    }

    return(
        <div style={ {backgroundColor:'tomato', padding:'10px'} }>
            <Child name={ name } send = { showMessage } update = { updateName }/>
        </div>
    );
};
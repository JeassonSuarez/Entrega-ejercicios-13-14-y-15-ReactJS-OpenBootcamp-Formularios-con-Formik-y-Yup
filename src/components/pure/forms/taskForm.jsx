import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import Task from '../../models/task.class';

const TaskForm = ({ add, numTask }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(nameRef.current.value, descriptionRef.current.value, false, levelRef.current.value);
        add(newTask);
    };

    let textBtn = numTask > 0 ? 'Add new task' : 'Create first task'

    const normalStyle = {
        color:'blue',
        fontWeight:'bold'
    }
    const urgentStyle = {
        color:'yellow',
        fontWeight:'bold'
    }
    const blokingStyle = {
        color:'tomato',
        fontWeight:'bold'
    }

    return (
        <form onSubmit={ addTask } className = 'd-flex justify-content-center align-items-center mb-4'>
            <div className = 'form-outline flex-fill'>
                <input type = 'text' ref={ nameRef } id='inputName' placeholder= 'Name task' className = 'form-control form-control-lg' required autoFocus/>
                <input type = 'text' ref={ descriptionRef } id='inputDescription' placeholder= 'Description task' className = 'form-control form-control-lg' required/>
                {/* <label htmlFor='selectLevel' className='sr-only'></label> */}
                <select className = 'form-control form-control-lg' ref={ levelRef } defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL} >Normal</option>
                    <option value={LEVELS.BLOCKING} >Blocking</option>
                    <option value={LEVELS.URGENT} >Urgent</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2' style={{marginTop:'15px'}}>{ textBtn }</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    numTask: PropTypes.number.isRequired
}

export default TaskForm;

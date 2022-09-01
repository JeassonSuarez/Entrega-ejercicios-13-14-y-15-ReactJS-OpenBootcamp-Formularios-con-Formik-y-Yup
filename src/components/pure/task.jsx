import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Task from '../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../models/levels.enum';
const TaskComponent = ({ task, completed, remove }) => {

    // useEffect(() => {
    //     console.log('Tarea Creada');
    //     return () => {
    //         console.log(`Task: ${task.name} is going to unmount`);
    //     }
    // }, [task])

    /**
     * funcion que retorna un badge deppendiendo un nivel u otro
     */
    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                );
            default:
                break;
        }
    };

    /**
     * funcion que retorna un icono dependiendo de si una tarea esta completada o no
     */
    const taskCompletedIcon = () => {
        if (task.completed) {
            return(<i onClick={()=>completed(task)} className='bi-toggle-on task-action' style={ {color: 'green', fontSize:'20px'} }></i>)
        } else {
            return(<i onClick={()=>completed(task)} className='bi-toggle-off task-action' style={ {color: 'grey', fontSize:'20px'} }></i>)
        }
    };

    const taskCompleted = {
        marginTop: '5px',
        color: 'grey',
        textDecoration: 'line-through'
    };
    
    const taskPending = {
        marginTop: '5px',
        fontWeight: 'bold',
        color: 'tomato'
    };

    return (
        // add styles desde un archivo externo css
        // <tr className = {`fw-normal ${task.completed ? 'task-completed':'task-pending'}`}>

        // add styles desde objetos desde el mismo archivo
        <tr className = 'fw-normal' style = {task.completed ? taskCompleted : taskPending}>
            <th>
                <span className = 'ms-2'>{ task.name }</span>
            </th>
            <td className = 'align-middle'>
                <span>{ task.description }</span>
            </td>
            {/* sustituir por un badge */}
            <td className = 'align-middle'>
                {/* ejecucion de una funcion que retorna un badge */}
                { taskLevelBadge() }
            </td>
            {/* sustituir por iconos */}
            <td className = 'align-middle'>
                {/* ejecucion de una funcion que retorna un icono dependiendo de la completacion de una tarea */}
                { taskCompletedIcon() }
                <i  onClick={ ()=>remove(task) } className = 'bi-trash task-action' style={ {color: 'tomato', fontSize:'20px'} }></i>
            </td>
        </tr>
        // <div>
        //     <h2 className='task-name'>
        //         Nombre:{ task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Nivel: { task.level }
        //     </h4>
        //     <h5>
        //         Estado: { task.completed ? 'Completada' : 'Pendiente'}
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;

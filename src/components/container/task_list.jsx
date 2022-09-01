import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Task from '../models/task.class';
import { LEVELS } from '../models/levels.enum';
import TaskComponent  from '../pure/task';
import TaskForm from '../pure/forms/taskForm'
import TaskFormik from '../pure/forms/TaskFormik';

const TaskListComponent = () => {

    const defaultTaskOne = new Task('Example1', 'default description 1', false, LEVELS.URGENT);
    const defaultTaskTwo = new Task('Example2', 'default description 2', true, LEVELS.NORMAL);
    const defaultTaskThree = new Task('Example3', 'default description 3', true, LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTaskOne, defaultTaskTwo, defaultTaskThree]);
    const [loading, setLoading] = useState(true);
    // control del ciclo de vida del componentes
    useEffect(() => {
        console.log('Task state has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('Task list component is going to UnMount');
        };
    }, [tasks]);


    /*
        se realiza una actualizacion del estado de tareas, a partir de un evento que se ejecuta en el componente tarea
        a traves de una prop
    */
    const completedTask = (cTask) => {
        console.log('Completed this task: ',cTask);
        const index = tasks.indexOf(cTask);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        setTasks(tempTask);
    };

    const deleteTask = (cTask) => {
        console.log('Completed this task: ',cTask);
        const index = tasks.indexOf(cTask);
        const tempTask = [...tasks];
        // se actualiza la lista de tareas usando splice, indicando el indice y cuantas desde dicho indice
        tempTask.splice(index,1);
        setTasks(tempTask);
    };

    const AddTask = (task) => {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    };

    const Table = () => {
        return (<table>
            <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Descripción</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* iterar sobre una lista de tareas */}
                {/* aplicar un for o map para renderizar una lista de tareas */}
                {
                    tasks.map((task, i) => {
                        return <TaskComponent
                            key = { i }
                            task = { task }
                            completed={ completedTask }
                            remove={ deleteTask }
                            />
                    })
                }
            </tbody>
        </table>);
    };

    let taskTable;

    tasks.length > 0
    ?taskTable = <Table></Table>
    :taskTable = <div>
                    <h3>There are no tasks to show</h3>
                    <h4>Please create one</h4>
                </div>


    const styleLoading = {
        color:'grey',
        fontsize:'30px',
        fontWeight:'bold',
    }

    return (
        <div>
            <div className = 'col-12'>
                <div className = 'card'>
                    {/* card header tittle */}
                    <div className = 'card-header p-3'>
                        <h5>
                            Tus tareas:
                        </h5>
                    </div>
                    {/* card body content */}
                    <div className = 'card-body' data-mdb-perfect-scrollbar = 'true' style={ {position: 'relative', height: 'fit-content', minHeight:'400px'} }>
                        {/* TO DO add loading spinner */}
                        {loading ? <p style={ styleLoading }>loading tasks</p> :taskTable}
                    </div>
                </div>
            </div>
            <TaskFormik add={ AddTask } numTask={ tasks.length }/>
            {/* <TaskForm add={ AddTask } numTask={ tasks.length }/> */}
        </div>
    );
};

export default TaskListComponent;

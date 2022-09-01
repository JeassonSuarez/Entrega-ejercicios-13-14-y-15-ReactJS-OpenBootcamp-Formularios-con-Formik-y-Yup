import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Task from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskFormik = ({ add, numTask }) => {

    const initialValues = {
        nameTask: '',
        description: '',
        levelTask: LEVELS.NORMAL
    }

    const addTaskSchema = Yup.object().shape(
        {
            nameTask: Yup.string().required('Name Task is required'),
            description: Yup.string().required('Description is required'),
            levelTask: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT])
        }
    );

    const addTask = (values) => {
        const newTask = new Task(values.nameTask, values.description, false, values.levelTask);
        add(newTask);
    };

    let textBtn = numTask > 0 ? 'Add new task' : 'Create first task'



    return (
        <div>
            <h4>Add Task</h4>
            <Formik
                initialValues={ initialValues }
                validationSchema={ addTaskSchema }
                onSubmit={ async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    addTask(values)
                } }
            >
            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                        <label htmlFor='nameTask'>Name Task:</label>
                        <Field id='nameTask' name='nameTask' placeholder='do it' type='text' className = 'form-control form-control-lg'/>
                        {/* nameTask errors */}
                        {
                            errors.nameTask && touched.nameTask &&
                            (
                                <ErrorMessage component='div' name='nameTask'/>
                            )
                        }

                        <label htmlFor='description'>Description:</label>
                        <Field id='description' name='description' placeholder='do it' type='text' className = 'form-control form-control-lg'/>
                        {/* description errors */}
                        {
                            errors.description && touched.description &&
                            (
                                <ErrorMessage component='div' name='description'/>
                            )
                        }

                        <label htmlFor="levelTask">Level:</label>
                        <Field component="select" id="levelTask" name="levelTask" className = 'form-control form-control-lg'>
                            <option value={ LEVELS.NORMAL }>Normal</option>
                            <option value={ LEVELS.BLOCKING }>Blocking</option>
                            <option value={ LEVELS.URGENT }>Urgent</option>
                        </Field>
                        {/* levelTask errors */}
                        {
                            errors.levelTask && touched.levelTask &&
                            (
                                <ErrorMessage component='div' name='levelTask'/>
                            )
                        }

                        <button type='submit' className='btn btn-success btn-lg ms-2' style={{marginTop:'15px'}}>{ textBtn }</button>
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default TaskFormik;

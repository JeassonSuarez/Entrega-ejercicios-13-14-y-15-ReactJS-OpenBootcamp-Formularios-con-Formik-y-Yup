import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginEsquema = Yup.object().shape(
    {
        email: Yup.string().email('Email Format Invalid').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);




const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // initial values that the form will take
                initialValues={ initialCredentials }
                // YUP validacion del esquema
                validationSchema = { loginEsquema }
                // onsubmit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                    // cuando me logueo los datos quedan almacenados en el local localStorage del navegador
                    localStorage.setItem('credentials', values);
                }}>

                {/* we obtains props from formik */}

                {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                        <label htmlFor='email'>Email:</label>
                        <Field id='email' name='email' placeholder='example@gmail.com' type='email' />

                        {/* email errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage component='div' name='email'/>
                            )
                        }

                        <label htmlFor='password'>Password:</label>
                        <Field id='password' name='password' type='password' placeholder='password' />
                        {/* password errors */}
                        {
                            errors.password && touched.password && 
                            (
                                <ErrorMessage component='div' name='password'/>
                            )
                        }
 
                        <button type='submit'>Login</button>
                        { isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}

                {/* otra forma
                {
                    props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                        } = props;

                        return(
                            <Form>
                                <label htmlFor='email'>Email:</label>
                                <Field id='email' name='email' placeholder='example@gmail.com' type='email' />

                                {
                                    errors.email && touched.email && 
                                    (
                                        <div className='error'>
                                            <p>{errors.email}</p>
                                        </div>
                                    )
                                }
                                {
                                    errors.password && touched.password && 
                                    (
                                        <div className='error'>
                                            <p>{errors.password}</p>
                                        </div>
                                    )
                                }

                                <label htmlFor='password'>Password:</label>
                                <Field id='password' name='password' type='password' placeholder='password' />
                                <button type='submit'>Login</button>
                                { isSubmitting ? (<p>Login your credentials...</p>) : null}
                            </Form>
                        );
                    }
                } */}

            </Formik>
        </div>
    );
}

export default LoginFormik;

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User } from '../../models/users.class'
import { ROLES } from '../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string().min(6, 'useename too short').max(12, 'username too long').required('username is required'),
            email: Yup.string().email('Email Format Invalid').required('Email is required'),
            password: Yup.string().min(8, 'password too short').required('password is required'),
            // is confirma que hay un valor en pass y que sea mayor a cero
            // then una vez confirmado el is, entra al then donde se valida que el campo sea igual al value del password con oneOf
            // se usa Yup.ref para acceder al valor de una propiedad como password
            confirm: Yup.string().when('password', {is: value => (value && value.length>0) ? true : false, then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!')}).required('you must confirm the passwor'),
            role:Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'you must select a Role: User / Admin').required('Role is required')
        }

    );

    const submit = (values) => {
        alert('register user');
    };

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={ initialValues }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                    submit(values)
                }}
                validationSchema={ registerSchema }>

                {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                        <label htmlFor='username'>Username:</label>
                        <Field id='username' name='username' placeholder='jeassons' type='text'/>
                        {/* username errors */}
                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage component='div' name='username'/>
                            )
                        }

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

                        <label htmlFor='confirm'>Confirm Password:</label>
                        <Field id='confirm' name='confirm' type='password' placeholder='confirm password' />
                        {/* password errors */}
                        {
                            errors.confirm && touched.confirm && 
                            (
                                <ErrorMessage component='div' name='confirm'/>
                            )
                        }

                        <button type='submit'>Register Acount</button>
                        { isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;

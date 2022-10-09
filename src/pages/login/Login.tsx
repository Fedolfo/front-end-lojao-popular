import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from 'utils/yup/login/login-schema';
import { Link, useNavigate } from 'react-router-dom';
import { api } from 'service/api';

type PropsLogin = {
  email: string;
  password: string;
};

function Login(): JSX.Element {
  const [email] = useState<string>('');
  const [password] = useState<string>('');
  const goTo = useNavigate();

  const loginValues: PropsLogin = {
    email,
    password,
  };

  const handleLogin = async (values: PropsLogin): Promise<unknown> => {
    try {
      const { data } = await api.post('/api/login', values);
      if (data) {
        localStorage.setItem(
          'email',
          JSON.stringify({
            email: values.email,
          }),
        );
        localStorage.setItem(
          'token',
          JSON.stringify({
            token: data.accessToken,
          }),
        );
      }

      goTo('/');
    } catch (error) {
      return error;
    }
  };

  return (
    <Formik
      initialValues={loginValues}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
    >
      {(formik) => {
        const { errors, dirty, isValid, touched, handleChange, handleBlur } =
          formik;
        return (
          <Form>
            <div className='flex flex-col h-screen justify-center items-center'>
              <div className='android:relative android:bottom-20'>
                <h1 className='text-4xl'>Lojão Popular</h1>
              </div>
              <span className='text-base'>Faça login na sua conta</span>
              <div className='mb-2'>
                <label
                  htmlFor='email'
                  className='block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Email
                </label>
                <Field
                  type='email'
                  name='email'
                  id='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? 'android:w-80 block w-full p-2.5 border border-red-800 text-sm rounded-lg'
                      : 'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  }
                  data-testid='input-email-login'
                />
                <ErrorMessage
                  name='email'
                  component='span'
                  className='text-xs text-red-900 h-0'
                />
              </div>
              <div className='mb-2'>
                <label
                  htmlFor='password'
                  className='block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Senha
                </label>
                <Field
                  type='password'
                  name='password'
                  id='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? 'android:w-80 block w-full p-2.5 border border-red-800 text-sm rounded-lg'
                      : 'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  }
                  data-testid='input-password-login'
                />
                <ErrorMessage
                  name='password'
                  component='span'
                  className='text-xs text-red-900 mt-1'
                />
                <small className='text-base mt-1 flex justify-end underline'>
                  Esqueceu a senha?
                </small>
              </div>

              <button
                type='submit'
                className={
                  !(dirty && isValid)
                    ? 'android:relative android:top-32 disabled:opacity-30  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    : 'android:relative android:top-32 android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                }
                disabled={!(dirty && isValid)}
              >
                Login
              </button>
              <span className='android:relative android:top-36'>
                Não tem conta?{' '}
                <Link to='/register'>
                  <b className='underline'>Registre-se</b>
                </Link>
              </span>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;

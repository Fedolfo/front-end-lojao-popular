import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import signUpSchema from 'utils/yup/login/sign-up-schema';
import { api } from 'service/api';

type PropsRegister = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export function SingUp(): JSX.Element {
  const [name] = useState<string>('');
  const [email] = useState<string>('');
  const [password] = useState<string>('');
  const [passwordConfirmation] = useState<string>('');

  const goTo = useNavigate();

  const registerValues: PropsRegister = {
    name,
    email,
    password,
    passwordConfirmation,
  };

  const handleRegister = async (values: PropsRegister): Promise<unknown> => {
    try {
      const { data } = await api.post('/signup', values);
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
      initialValues={registerValues}
      validationSchema={signUpSchema}
      onSubmit={async (values) => {
        await handleRegister(values);
      }}
    >
      {(formik) => {
        const { errors, dirty, isValid, touched } = formik;
        return (
          <Form>
            <div className='flex flex-col h-screen justify-center items-center'>
              <div className='android:relative android:bottom-20'>
                <h1 className='text-4xl'>Lojão Popular</h1>
              </div>
              <span className='text-base'>Crie sua nova conta</span>
              <div className='mb-2'>
                <label
                  htmlFor='name'
                  className='block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Nome
                </label>
                <Field
                  type='text'
                  name='name'
                  id='name'
                  className={
                    errors.email && touched.email
                      ? 'android:w-80 block w-full p-2.5 border border-red-800 text-sm rounded-lg'
                      : 'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  }
                  data-testid='input-name'
                />
                <ErrorMessage
                  name='name'
                  component='span'
                  className='text-xs text-red-900 mt-1'
                />
              </div>
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
                  className={
                    errors.email && touched.email
                      ? 'android:w-80 block w-full p-2.5 border border-red-800 text-sm rounded-lg'
                      : 'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  }
                  data-testid='input-email'
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
                  className={
                    errors.email && touched.email
                      ? 'android:w-80 block w-full p-2.5 border border-red-800 text-sm rounded-lg'
                      : 'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  }
                  data-testid='input-password'
                />
                <ErrorMessage
                  name='password'
                  component='span'
                  className='text-xs text-red-900 mt-1'
                />
              </div>
              <div className='mb-2'>
                <label
                  htmlFor='passwordConfirmation'
                  className='block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Confirme sua senha
                </label>
                <Field
                  type='password'
                  name='passwordConfirmation'
                  id='passwordConfirmation'
                  className={
                    errors.email && touched.email
                      ? 'android:w-80 block w-full p-2.5 border border-red-800 text-sm rounded-lg'
                      : 'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  }
                  data-testid='input-password-confirmation'
                />
                <ErrorMessage
                  name='passwordConfirmation'
                  component='span'
                  className='text-xs text-red-900 mt-1'
                />
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
                Registrar
              </button>
              <span className='android:relative android:top-36'>
                Já tem uma conta?{' '}
                <Link to='/login'>
                  <b className='underline'>Login</b>
                </Link>
              </span>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

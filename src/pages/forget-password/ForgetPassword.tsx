import { AxiosResponse } from 'axios';
import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from 'service/api';

type propsForgetPassword = {
  email: string;
};

function ForgetPassword(): JSX.Element {
  const [email, setEmail] = useState<propsForgetPassword>({
    email: '',
  });

  const handleChange = (event: {
    target: { name: string; value: string };
  }): void => {
    const { name, value } = event.target;
    setEmail({ ...email, [name]: value });
  };

  const handleForgetPassword = async (
    e: MouseEvent,
  ): Promise<AxiosResponse<any, any>> => {
    e.preventDefault();
    return await api.post('/api/forgot_password', email);
  };

  return (
    <main className='flex h-screen justify-center items-center'>
      <section className='flex flex-col justify-center items-center'>
        <div className='android:relative android:bottom-48'>
          <Link to='/'>
            <h1 className='text-4xl text-center'>Lojão Popular</h1>
          </Link>
        </div>
        <h2 className='android:relative android:bottom-10 text-center'>
          Perdeu a senha? Não tem problema! Coloque o seu melhor e-mail!
        </h2>
        <form action='#'>
          <label htmlFor='email'>
            Seu e-mail:
            <input
              type='email'
              id='email'
              placeholder='Adicione o seu email'
              name='email'
              onChange={handleChange}
              className='android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </label>
          <button
            type='submit'
            onClick={handleForgetPassword}
            className='android:relative android:top-32 android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            Enviar para o e-mail
          </button>
        </form>
      </section>
    </main>
  );
}

export default ForgetPassword;

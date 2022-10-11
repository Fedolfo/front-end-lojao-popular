import React, { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from 'service/api';

type propsForgetPassword = {
  email: string;
  token?: string;
  password?: string;
};

function ForgetPassword(): JSX.Element {
  const [propsForgetPassword, setPropsForgetPassword] =
    useState<propsForgetPassword>({
      email: '',
      token: '',
      password: '',
    });

  const [visible, setVisible] = useState<boolean>(false);
  const [axiosError, setAxiosError] = useState<string>('');
  const [axiosErrorEmail, setAxiosErrorEmail] = useState<string>('');
  const [messageUser, setMessageUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const handleChange = (event: {
    target: { name: string; value: string };
  }): void => {
    const { name, value } = event.target;
    setPropsForgetPassword({ ...propsForgetPassword, [name]: value });
  };

  useEffect(() => {
    setTimeout(() => {
      if (axiosError) {
        setAxiosError('');
      }
    }, 8000);
  }, [axiosError]);

  const handleForgetPassword = async (e: MouseEvent): Promise<void> => {
    e.preventDefault();
    try {
      const { data } = await api.post(
        '/api/forgot_password',
        propsForgetPassword,
      );
      if (e) {
        data;
        setVisible(true);
        setMessageUser(
          'O token para trocar de senha foi enviado, para o e-mail!',
        );
        setLoading(false);
      }
    } catch (err: any) {
      setAxiosErrorEmail(err.response.data);
    }
  };

  const handleResetPassword = async (e: MouseEvent): Promise<void> => {
    e.preventDefault();
    try {
      const { data } = await api.post(
        '/api/reset_password',
        propsForgetPassword,
      );
      if (e) {
        data;
        setConfirmation(true);
      }
    } catch (err: any) {
      setAxiosError(err.response.data);
    }
  };

  return (
    <main className='flex h-screen justify-center items-center'>
      <section className='flex flex-col justify-center items-center'>
        <div className='android:relative android:bottom-28'>
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
            <small className='flex justify-start text-blue-400 text-xs'>
              {messageUser}
            </small>
            <small className='flex justify-start text-red-600'>
              {axiosErrorEmail}
            </small>
          </label>

          {loading ? (
            <small className='flex justify-start text-xs mt-1'>
              Aparecera novas informações após confirmar o envio.
            </small>
          ) : (
            visible && (
              <>
                <label htmlFor='email'>
                  Seu token:
                  <input
                    type='text'
                    id='token'
                    placeholder='Adicione o Token'
                    name='token'
                    onChange={handleChange}
                    className='android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                  <small className='flex justify-start text-red-600 text-xs'>
                    {axiosError}
                  </small>
                </label>
                <label htmlFor='email'>
                  Sua nova senha:
                  <input
                    type='password'
                    id='password'
                    placeholder='Adicione a sua senha'
                    name='password'
                    onChange={handleChange}
                    className='android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                  <small className='flex justify-start text-red-600 text-xs'>
                    {axiosError}
                  </small>
                </label>
              </>
            )
          )}
          <button
            type='submit'
            onClick={visible ? handleResetPassword : handleForgetPassword}
            className='mt-10 android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            {visible ? 'Atualizar a senha' : 'Enviar para o e-mail'}
          </button>
          <small className='flex justify-start mt-2 text-green-400 text-sm'>
            {confirmation && 'Senha atualizada com sucesso!'}
          </small>
          <Link
            to='/login'
            className='flex justify-center mt-2 underline text-lg'
          >
            {confirmation && 'Voltar para o login'}
          </Link>
        </form>
      </section>
    </main>
  );
}

export default ForgetPassword;

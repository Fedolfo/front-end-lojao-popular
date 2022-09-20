import Input from 'components/input/Input';
import React from 'react';

export function SingUp(): JSX.Element {
  return (
    <form
      action='#'
      className='flex flex-col h-screen justify-center items-center'
    >
      <Input
        label={'Nome'}
        type={'text'}
        name={'name'}
        className={
          'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        }
        testId={'name'}
        onChange={(): void => {
          null;
        }}
      />
      <Input
        label={'Email'}
        type={'email'}
        name={'email'}
        className={
          'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        }
        testId={'email'}
        onChange={(): void => {
          null;
        }}
      />
      <Input
        type={'password'}
        name={'password'}
        className={
          'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        }
        label={'Senha'}
        testId={'password'}
        onChange={(): void => {
          null;
        }}
      />
      <Input
        label={'Confirme sua senha'}
        type={'password'}
        name={'passwordConfirmation'}
        className={
          'android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        }
        testId={'password-confirmation'}
        onChange={(): void => {
          null;
        }}
      />
    </form>
  );
}

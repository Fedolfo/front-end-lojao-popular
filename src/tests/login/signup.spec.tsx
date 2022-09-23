import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { SingUp } from '../../pages/login/Signup';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

interface SutTypes {
  inputName: HTMLInputElement;
  inputEmail: HTMLInputElement;
  inputPassword: HTMLInputElement;
  inputConfirmation: HTMLInputElement;
}

const makeSut = (): SutTypes => {
  const inputName = screen.getByTestId('input-name') as HTMLInputElement;
  const inputEmail = screen.getByTestId('input-email') as HTMLInputElement;
  const inputPassword = screen.getByTestId(
    'input-password',
  ) as HTMLInputElement;
  const inputConfirmation = screen.getByTestId(
    'input-password-confirmation',
  ) as HTMLInputElement;

  return {
    inputName,
    inputEmail,
    inputPassword,
    inputConfirmation,
  };
};

describe('Page SingUp', () => {
  afterEach(cleanup);
  test('Should SignUp must render inputs name, email, password and password Confirmation', () => {
    render(<SingUp />, { wrapper: BrowserRouter });
    const { inputName, inputEmail, inputPassword, inputConfirmation } =
      makeSut();

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputConfirmation).toBeInTheDocument();
  });

  test('Should SignUp submits correct values if correct validations are correct', async () => {
    render(<SingUp />, { wrapper: BrowserRouter });

    const { inputName, inputEmail, inputPassword, inputConfirmation } =
      makeSut();

    await act(() => {
      fireEvent.change(inputName, { target: { value: 'any_nome' } });
      fireEvent.change(inputEmail, {
        target: { value: 'any_email@email.com' },
      });
      fireEvent.change(inputPassword, { target: { value: '123456789' } });
      fireEvent.change(inputConfirmation, { target: { value: '123456789' } });
    });

    const buttonSubmit = screen.getByRole('button');
    expect(buttonSubmit).toBeEnabled();
  });
});

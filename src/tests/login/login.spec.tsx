import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Login from 'pages/login/Login';

interface SutTypes {
  inputEmailLogin: HTMLInputElement;
  inputPasswordLogin: HTMLInputElement;
}

const makeSut = (): SutTypes => {
  const inputEmailLogin = screen.getByTestId(
    'input-email-login',
  ) as HTMLInputElement;
  const inputPasswordLogin = screen.getByTestId(
    'input-password-login',
  ) as HTMLInputElement;

  return {
    inputEmailLogin,
    inputPasswordLogin,
  };
};

describe('Page Login', () => {
  afterEach(cleanup);
  test('Should Login must render inputs email and password', () => {
    render(<Login />, { wrapper: BrowserRouter });
    const { inputEmailLogin, inputPasswordLogin } = makeSut();

    expect(inputEmailLogin).toBeInTheDocument();
    expect(inputPasswordLogin).toBeInTheDocument();
  });

  test('Should Login submits correct values if correct validations are correct', async () => {
    render(<Login />, { wrapper: BrowserRouter });

    const { inputEmailLogin, inputPasswordLogin } = makeSut();

    await act(() => {
      fireEvent.change(inputEmailLogin, {
        target: { value: 'any_email@email.com' },
      });
      fireEvent.change(inputPasswordLogin, { target: { value: '123456789' } });
    });

    const buttonSubmit = screen.getByRole('button');
    expect(buttonSubmit).toBeEnabled();
  });
});

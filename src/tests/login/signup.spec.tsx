import React from 'react';
import { render, screen } from '@testing-library/react';
import { SingUp } from '../../pages/login/Signup';
// import App from '../../App';

describe('Page SingUp', () => {
  test('Should SignUp must render inputs name, email, password and password Confirmation', () => {
    render(<SingUp />);

    const inputName = screen.getByTestId('input-name');
    const inputEmail = screen.getByTestId('input-email');
    const inputPassword = screen.getByTestId('input-password');
    const inputConfirmation = screen.getByTestId('input-password-confirmation');
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputConfirmation).toBeInTheDocument();
  });
});

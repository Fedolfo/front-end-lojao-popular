import React, { useState } from 'react';

interface UseForm {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  values: object;
}

export const useForm = (callback: any, initialState = {}): UseForm => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    await callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

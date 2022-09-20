import PropTypes from 'prop-types';
import React from 'react';

type InputProps = {
  label: string;
  type: 'email' | 'password' | 'text';
  name: string;
  className: string;
  testId: string;
  onChange: (value: string) => void | Promise<void>;
  required?: boolean;
};

const Input = ({
  label,
  type,
  name,
  className,
  testId,
  onChange,
  required,
}: InputProps): JSX.Element => {
  const changeHandler = !onChange
    ? undefined
    : (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
      };
  return (
    <div className='mb-6'>
      <label
        htmlFor={name}
        className='block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
        <input
          id={name}
          type={type}
          name={name}
          className={className}
          data-testid={`input-${testId}`}
          onChange={changeHandler}
          required={required}
        />
      </label>
    </div>
  );
};

Input.propTypes = {
  rest: PropTypes.node,
};

export default Input;

import React from 'react';

type InputProps = {
  label: string;
  type: 'email' | 'password' | 'text';
  name: string;
  className: string;
  testId: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
          onChange={onChange}
          required={required}
        />
      </label>
    </div>
  );
};

export default Input;

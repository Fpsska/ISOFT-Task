import React, { useState, useRef } from 'react';

import { useAppDispatch } from '../../app/hooks';

import { setInputValue } from '../../app/slices/formSlice';

import './form.scss';

// /. imports

const Form: React.FC = () => {
  const [enteredInputValue, setEnteredInputValue] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null!);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    dispatch(
      setInputValue({ id: +new Date(), value: `${enteredInputValue} ;` })
    );
    // clear input value
    formRef.current.reset();
    setEnteredInputValue('');
  };

  return (
    <form className="form" ref={formRef} onSubmit={e => handleFormSubmit(e)}>
      <fieldset>
        <legend>add new file name</legend>
        <input
          className="form__input"
          type="text"
          placeholder="Type file name..."
          onChange={e => setEnteredInputValue(e.target.value)}
          autoFocus
        />
      </fieldset>
    </form>
  );
};

export default Form;

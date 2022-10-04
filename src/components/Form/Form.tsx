import React, { useState, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { setFileContent } from '../../app/slices/formSlice';

import './form.scss';

// /. imports

const Form: React.FC = () => {
  const { isFileSelected } = useAppSelector(state => state.formSlice);

  const [enteredInputValue, setEnteredInputValue] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null!);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    console.log(enteredInputValue);
    // dispatch(
    //   setInputValue({ id: +new Date(), value: `${enteredInputValue} ;` })
    // );
    dispatch(
      setFileContent({
        id: +new Date(),
        value: `${enteredInputValue} ${enteredInputValue && ';'}`
      })
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
          disabled={!isFileSelected}
          autoFocus
        />
      </fieldset>
    </form>
  );
};

export default Form;

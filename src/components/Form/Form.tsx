import React, { useState, useRef, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { setFileContent } from '../../app/slices/formSlice';

import './form.scss';

// /. imports

const Form: React.FC = () => {
  const { isFileSelected } = useAppSelector(state => state.formSlice);

  const [enteredInputValue, setEnteredInputValue] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // add autofocus for form__input
    isFileSelected && inputRef.current.focus();
  }, [isFileSelected]);

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    dispatch(
      setFileContent({
        id: +new Date(),
        // prohibit dispatch with only for ; as a value
        value: `${enteredInputValue} ${enteredInputValue && ';'}`
      })
    );
    // clear input value
    formRef.current.reset();
    setEnteredInputValue('');
  };

  return (
    <form ref={formRef} className="form" onSubmit={e => handleFormSubmit(e)}>
      <fieldset>
        <legend>add new file name</legend>
        <input
          className="form__input"
          ref={inputRef}
          type="text"
          placeholder="Type file name..."
          onChange={e => setEnteredInputValue(e.target.value)}
          disabled={!isFileSelected}
        />
      </fieldset>
    </form>
  );
};

export default Form;

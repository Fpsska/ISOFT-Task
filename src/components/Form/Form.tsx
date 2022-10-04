import React from 'react';

import './form.scss';

// /. imports

const Form: React.FC = () => {
  return (
    <form className="form" onSubmit={e => e.preventDefault()}>
      <fieldset>
        <legend>add new file name</legend>
        <input
          className="form__input"
          type="text"
          placeholder="Type file name..."
        />
      </fieldset>
    </form>
  );
};

export default Form;

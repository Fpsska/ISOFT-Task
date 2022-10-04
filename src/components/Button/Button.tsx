import React from 'react';

import './button.scss';

// /. imports

interface propTypes {
  role: string;
  isActive: boolean;
  children?: JSX.Element;
}

// /. interfaces

const Button: React.FC<propTypes> = props => {
  const { role, isActive, children } = props;

  return (
    <button
      className={isActive ? 'button active' : 'button'}
      aria-label={role}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

import React, { useState, useEffect } from 'react';

import './button.scss';

// /. imports

interface propTypes {
  id: number;
  role: string;
  isActive: boolean;
  handleButtonClick: (arg: number, e: any) => void;
}

// /. interfaces

const Button: React.FC<propTypes> = props => {
  const { id, role, isActive, handleButtonClick } = props;

  const [childrenEl, setChildrenEl] = useState<JSX.Element | ''>();

  useEffect(() => {
    // handle button content
    switch (role) {
      case 'open more options':
        setChildrenEl(
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00024 9.5L6.50024 10H13.5002L14.0002 9.5V0.5L13.5002 0H6.50024L6.00024 0.5L6.00024 9.5ZM8.00024 2L12.0002 2V8L8.00024 8L8.00024 2ZM4.00024 6V2H5.00024V1H3.50024L3.00024 1.5V6V6.5V8.5L3.50024 9H5.00024V8H4.00024V6.5V6ZM1.00024 5V3H2.00024V2H0.500244L0.000244141 2.5V5V5.5V7.5L0.500244 8H2.00024V7H1.00024V5.5V5Z"
              fill="#424242"
            />
          </svg>
        );
        break;
      default:
        setChildrenEl('');
    }
  }, [role]);

  return (
    <button
      className={isActive ? 'button active' : 'button'}
      type="button"
      aria-label={role}
      data-content={id}
      onClick={e => handleButtonClick(id, e)}
    >
      {childrenEl}
    </button>
  );
};

export default Button;

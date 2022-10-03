import React, { useState, useEffect } from 'react';

import logo from '../../assets/images/logo.jpeg';

import './header.scss';

// /. imports

const Header: React.FC = () => {
  const [time, setTime] = useState<string>('00:00:00 PM');

  useEffect(() => {
    const date = new Date();

    const currentTime = setInterval(() => {
      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(currentTime);
    };
  }, [time]);

  return (
    <header className="header border">
      <div className="header__wrapper">
        <time className="header__time">{time}</time>

        <a className="header__logo logo" href="#">
          <img className="logo__image" src={logo} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;

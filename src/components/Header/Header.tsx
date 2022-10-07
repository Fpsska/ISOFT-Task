import React, { useState, useEffect } from 'react';

import logo from '../../assets/images/logo.jpeg';

import './header.scss';

// /. imports

const Header: React.FC = () => {
  const [time, setTime] = useState<string>('00:00:00 xx');
  const [dateTimeAttr, setDateTimeAttr] = useState<string>('');

  useEffect(() => {
    const date = new Date();

    const currentTime = setInterval(() => {
      setTime(date.toLocaleTimeString('en-US'));
      setDateTimeAttr(date.toISOString());
    }, 1000);

    return () => {
      clearInterval(currentTime);
    };
  }, [time]);

  return (
    <header className="header border">
      <div className="header__wrapper">
        <time className="header__time" dateTime={dateTimeAttr}>
          Current time: {time}
        </time>

        <a
          className="header__logo logo"
          target="_blank"
          rel="nofollow noopener"
          href="https://spb.hh.ru/employer/9239466?hhtmFrom=vacancy"
        >
          <img className="logo__image" src={logo} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;

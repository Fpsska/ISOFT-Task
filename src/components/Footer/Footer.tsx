import React from 'react';

import Slider from '../Slider/Slider';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Slider>
          <button
            className="button"
            type="button"
            aria-label="do some event"
          ></button>
        </Slider>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';

import Slider from '../Slider/Slider';

import { Ibutton } from '../../types/buttonsDataTypes';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
  const [buttonDataTemplates, setButtonDataTemplates] = useState<Ibutton[]>([
    {
      id: 1,
      role: 'open more options',
      isActive: false
    },
    {
      id: 2,
      role: 'do some event',
      isActive: false
    },
    {
      id: 3,
      role: 'do some event',
      isActive: false
    },
    {
      id: 4,
      role: 'do some event',
      isActive: false
    },
    {
      id: 5,
      role: 'do some event',
      isActive: false
    },
    {
      id: 6,
      role: 'do some event',
      isActive: false
    },
    {
      id: 7,
      role: 'do some event',
      isActive: false
    },
    {
      id: 8,
      role: 'do some event',
      isActive: false
    },
    {
      id: 9,
      role: 'do some event',
      isActive: false
    },
    {
      id: 10,
      role: 'do some event',
      isActive: false
    },
    {
      id: 11,
      role: 'do some event',
      isActive: false
    },
    {
      id: 12,
      role: 'do some event',
      isActive: false
    },
    {
      id: 13,
      role: 'do some event',
      isActive: false
    },
    {
      id: 14,
      role: 'do some event',
      isActive: false
    },
    {
      id: 15,
      role: 'do some event',
      isActive: false
    },
    {
      id: 16,
      role: 'do some event',
      isActive: false
    }
  ]);

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Slider
          data={buttonDataTemplates}
          setButtonDataTemplates={setButtonDataTemplates}
        ></Slider>
      </div>
    </footer>
  );
};

export default Footer;

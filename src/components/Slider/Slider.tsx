import React, { useState, useEffect } from 'react';

import { Ibreakpoints } from '../../types/sliderTypes';
import { Ibutton } from '../../types/buttonsDataTypes';

import Button from '../Button/Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import './slider.scss';

// import required modules
import { Navigation, Scrollbar } from 'swiper';

// /. imports

interface propTypes {
  data: Ibutton[];
  setButtonDataTemplates: (arg: Ibutton[]) => void;
  limit: number;
}

// /. interfaces

const Slider: React.FC<propTypes> = ({
  data,
  setButtonDataTemplates,
  limit
}) => {
  const [breakpointsCFG] = useState<Ibreakpoints>({
    320: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    },
    1440: {
      slidesPerView: 1
    },
    1920: {
      slidesPerView: 1
    }
  });
  const [initialArrayEl, setInitialArrayEl] = useState<Ibutton[]>(data);
  const [lastArrayEl, setLastArrayEl] = useState<Ibutton[]>(data);

  useEffect(() => {
    setInitialArrayEl(data.slice(0, limit));
    setLastArrayEl(data.slice(limit, data.length));
  }, [data, limit]);

  const handleButtonClick = (_id: number, e: any): void => {
    // add active class for current item, remove class of other elmts
    const newArray = data.map(item =>
      item.id === _id
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );

    // remove active class by second/toggle click for current item
    const btnEl = e.currentTarget;
    const isElhasClass = btnEl.classList.contains('active');

    if (isElhasClass) {
      const currentItem = newArray.find(({ id }) => id === _id);
      currentItem && (currentItem.isActive = false); // ''/null/undefined validation
    }

    // if (btnEl.classList.contains('active')) {
    //   const currentItem = newArray.find(({ id }) => id === _id);
    //   if (currentItem) {
    //     currentItem.isActive = false;
    //   }
    // }

    setButtonDataTemplates(newArray);
  };

  return (
    <>
      <Swiper
        spaceBetween={50}
        navigation={{
          prevEl: '.slider-button.prev',
          nextEl: '.slider-button.next'
        }}
        scrollbar={{
          hide: true
        }}
        breakpoints={breakpointsCFG}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          {initialArrayEl.map((template: Ibutton) => {
            return (
              <Button
                key={template.id}
                id={template.id}
                role={template.role}
                isActive={template.isActive}
                handleButtonClick={handleButtonClick}
              ></Button>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {lastArrayEl.map((template: Ibutton) => {
            return (
              <Button
                key={template.id}
                id={template.id}
                role={template.role}
                isActive={template.isActive}
                handleButtonClick={handleButtonClick}
              ></Button>
            );
          })}
        </SwiperSlide>
      </Swiper>
      <button className="slider-button next"></button>
      <button className="slider-button prev"></button>
    </>
  );
};

export default Slider;

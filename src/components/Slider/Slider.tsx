import React, { useState } from 'react';

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
}

// /. interfaces

const Slider: React.FC<propTypes> = ({ data, setButtonDataTemplates }) => {
  const [breakpointsCFG] = useState<Ibreakpoints>({
    320: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 25
    },
    375: {
      slidesPerGroup: 3,
      slidesPerView: 3
    },
    425: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 35
    },
    525: {
      slidesPerGroup: 5,
      slidesPerView: 5
    },
    625: {
      slidesPerGroup: 6,
      slidesPerView: 6
    },
    768: {
      slidesPerGroup: 7,
      slidesPerView: 7
    },
    1024: {
      slidesPerGroup: 8,
      slidesPerView: 8
    }
  });

  const handleButtonClick = (_id: number, e: React.SyntheticEvent): void => {
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
        {data.map((template: Ibutton) => {
          return (
            <SwiperSlide key={template.id}>
              <Button
                key={template.id}
                id={template.id}
                role={template.role}
                isActive={template.isActive}
                handleButtonClick={handleButtonClick}
              ></Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="slider-button next"></button>
      <button className="slider-button prev"></button>
    </>
  );
};

export default Slider;

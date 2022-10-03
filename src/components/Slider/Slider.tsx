import React, { useState } from 'react';

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
  children: any;
}

interface Ibreakpoints {
  [key: number | string]: { [key: string]: number };
}

// /. interfaces

const Slider: React.FC<propTypes> = ({ children }) => {
  const [breakpointsCFG] = useState<Ibreakpoints>({
    320: {
      slidesPerView: 2
    },
    375: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 6
    },
    1024: {
      slidesPerView: 8
    },
    1440: {
      slidesPerView: 10
    },
    1920: {
      slidesPerView: 12
    }
  });

  const slideChangeHandler = (e: any): void => {
    console.log('swipe', e);
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
        onSlideChange={e => slideChangeHandler(e)}
      >
        <SwiperSlide>
          <button className="button" type="button" aria-label="do some event">
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
          </button>
        </SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>

        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
      <button className="slider-button next"></button>
      <button className="slider-button prev"></button>
    </>
  );
};

export default Slider;

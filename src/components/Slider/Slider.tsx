import React from 'react';

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

// /. interfaces

const Slider: React.FC<propTypes> = ({ children }) => {
  const slideChangeHandler = (e: any): void => {
    console.log('swipe', e);
  };

  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={50}
        navigation={{
          prevEl: '.slider-button.prev',
          nextEl: '.slider-button.next'
        }}
        scrollbar={{
          hide: true
        }}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
        onSlideChange={e => slideChangeHandler(e)}
      >
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
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
      <button className="slider-button next"></button>
      <button className="slider-button prev"></button>
    </>
  );
};

export default Slider;

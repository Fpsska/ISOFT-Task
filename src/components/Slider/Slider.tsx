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
    console.log(initialArrayEl);
  }, [data, limit]);

  const slideChangeHandler = (swiper: any): void => {
    const index = swiper.activeIndex; // save current slide index
    const id = data[index].id; // find current slider item by current index

    const newArrayByIDX = data.map(template =>
      template.id === id
        ? { ...template, isActive: true }
        : { ...template, isActive: false }
    );
    // setButtonDataTemplates(newArrayByIDX);
  };

  const handleChildrenClick = (id: number): void => {
    // + toggle click = remove class
    const newArray = data.map(item =>
      item.id === id
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
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
        onSlideChange={e => slideChangeHandler(e)}
      >
        <SwiperSlide>
          {initialArrayEl.map((template: Ibutton) => {
            return (
              <Button
                key={template.id}
                id={template.id}
                role={template.role}
                isActive={template.isActive}
                handleChildrenClick={handleChildrenClick}
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
                handleChildrenClick={handleChildrenClick}
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

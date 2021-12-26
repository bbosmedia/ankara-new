import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'

const SliderOfGalleryItem = ({photos}) => {
    if(!photos) return null;
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
      }}
      >
          {photos.map(item=><SwiperSlide key={item.origin}>
          <img style={{width: "100%", height: "auto"}} src={item.thumbnail} alt="" />
        </SwiperSlide>)}
      </Swiper>
    )
}

export default SliderOfGalleryItem

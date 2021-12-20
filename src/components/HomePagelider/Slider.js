import React from 'react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'


const SliderHomepage = () => {
  SwiperCore.use([Autoplay]);
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img style={{width: "100%", height: "auto"}} src="https://cdn.yaponamama.uz/sliders/slider_1638343427.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width: "100%", height: "auto"}} src="https://cdn.yaponamama.uz/sliders/slider_1637322033.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width: "100%", height: "auto"}} src="https://cdn.yaponamama.uz/sliders/slider_1636626231.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width: "100%", height: "auto"}} src="https://cdn.yaponamama.uz/sliders/slider_1633687420.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    )
}

export default SliderHomepage

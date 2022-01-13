import React from 'react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import useBreadcrumbs from "use-react-router-breadcrumbs";


const SliderHomepage = () => {
  const [sliders, setSliders] = useState([]);
  const [lang, setLang] = useState("/ru");
  const breadcrumbs = useBreadcrumbs();
  const getSliders = async() =>{
    try{
      var items = await axios.get('https://api.ankara.uz/shop/category')
      if(items.status === 200){
          setSliders(items.data)
      }
  }catch(e){
      console.log(e);
  }
  }
  useEffect(() => {
    if (breadcrumbs.length > 1) {
      if (breadcrumbs[1].key === "/uz") {
        setLang("/uz");
      } else if (breadcrumbs[1].key === "/en") {
        setLang("/en");
      } else {
        setLang("/ru");
      }
    } else {
      setLang("/ru");
    }
    getSliders();
  }, [breadcrumbs])
  SwiperCore.use([Autoplay]);
    if(sliders.length === 0) return null;
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
        {sliders.map(slider=>{
          return(
            <SwiperSlide key={slider.id}>
              {lang ==='/ru' && <img style={{width: "100%", height: "auto"}} src={slider.photoRu} />}
              {lang ==='/uz' && <img style={{width: "100%", height: "auto"}} src={slider.photoUz} />}
              {lang ==='/en' && <img style={{width: "100%", height: "auto"}} src={slider.photoEn} />}
        </SwiperSlide>
          )
        })}
      </Swiper>
    )
}

export default SliderHomepage

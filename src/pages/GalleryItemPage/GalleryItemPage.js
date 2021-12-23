import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'


const GalleryItemPage = ({lang}) => {
    let { id } = useParams();
    const [galitem, setGalitem] = useState([]);
  const fetchGalItems = async () => {
    try {
      var items = await axios.get(`https://api.ankara.uz/gallery/${id}`);
      setGalitem(items.data);
      console.log(items);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalItems();
  }, [lang]);
    return (
        <div className="container-fluid ya-container-fluid">
   <div className="ya-page-block">
      <nav aria-label="breadcrumb">
         <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item"><Link to="/en" className="nuxt-link-active">
               Home
               </Link>
            </li>
            <li className="breadcrumb-item"><Link to="/en/gallery" className="nuxt-link-active">
               Gallery
               </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
               Озеленяем Ташкент
            </li>
         </ol>
      </nav>
      <h1 class="ya-group-title">Озеленяем Ташкент</h1>
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
   </div>
</div>
    )
}

export default GalleryItemPage

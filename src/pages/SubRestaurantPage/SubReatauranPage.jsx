import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SubReatauranPage = ({lang}) => {
    let { id } = useParams();
    const [items, setItems] = useState(null);
  const fetchGalItems = async () => {
    try {
      var items = await axios.get(`https://api.ankara.uz/restaurants/${id}`);
      setItems(items.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalItems();
  }, [lang]);

 
  if(items === null) return null;
    return (
        <div className="container">
  <div className="ya-page-block">
    
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ya-breadcrumb">
        <li className="breadcrumb-item">

          <Link to="/" className="nuxt-link-active"> Главная </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/restaurants" className="nuxt-link-active"> Рестораны </Link>
        </li>
        <li aria-current="page" className="breadcrumb-item active"> Yaponamama Шота </li>
      </ol>
    </nav>
    <h1 className="ya-group-title">О ресторане</h1>
    <div className="row">
      <div className="col-md-8">
        <div className="ya-restaurant-text">
            {lang === "" &&  <div dangerouslySetInnerHTML={{__html: items.contentRu}}/>}
            {lang === "/uz" &&  <div dangerouslySetInnerHTML={{__html: items.contentUz}}/>}
            {lang === "/en" &&  <div  dangerouslySetInnerHTML={{__html: items.contentEn}}/>}
          {lang === '' &&  <p><strong>Количество мест в зале</strong>: на {items.seatCount} персоны</p>}
          {lang === '/uz' &&  <p><strong>Zaldagi o'rinlar soni</strong>: {items.seatCount} kishilik</p>}
          {lang === '/en' &&  <p><strong>Number of seats</strong>: for {items.seatCount} people</p>}
          <p>
            <strong>Парковка:</strong> есть
          </p>
          {lang === '' && <p><strong>Режим работы:</strong> {items.workingTime}&nbsp;</p>}
          {lang === '/uz' && <p><strong>Ish vaqti:</strong> {items.workingTime}&nbsp;</p>}
          {lang === '/en' && <p><strong>Working hours:</strong> {items.workingTime}&nbsp;</p>}
          <p>
            <strong>Резерв столов:</strong>&nbsp; <a href="tel:+998982511213">+99898-251-12-13</a>; <a href="tel:+998712531213">+99871-253-12-13</a>
          </p>
          {lang === '' && <><p><strong>Адрес:</strong> {items.addressRu}</p><p><strong>Ориентир:</strong> {items.preferencePointRu}</p></>}
          {lang === '/uz' && <><p><strong>Manzil:</strong> {items.addressUz}</p><p><strong>Mo'ljal:</strong> {items.preferencePointUz}</p></>}
          {lang === '/en' && <><p><strong>Address:</strong> {items.addressEn}</p><p><strong>Landmark:</strong> {items.preferencePointEn}</p></>}
        </div>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled ya-restaurant-menu">
          <li>
            <span>
              <img height="40" src="/images/iconsrestaurant/ic_location.febd842.svg" className="lazyLoad isLoaded" />
            </span>
            {lang === '' && <a target="_blank" href={items.mapLink}>Местонахождение</a>}
            {lang === '/uz' && <a target="_blank" href={items.mapLink}>Joylashuvi</a>}
            {lang === '/en' && <a target="_blank" href={items.mapLink}>Location</a>}
          </li>
          <li>
            <span>
              <img height="40" src="/images/iconsrestaurant/ic_restaurant_menu.f6850cc.svg" className="lazyLoad isLoaded" />
            </span>
            {lang === '' && <Link to="/menu" className="">Меню</Link>}
            {lang === '/en' && <Link to="/en/menu" className="">Menu</Link>}
            {lang === '/uz' && <Link to="/uz/menu" className="">Menu</Link>}
          </li>
          <li>
            <span>
              <img height="40" src="/images/iconsrestaurant/ic_360.d1a12a9.svg" className="lazyLoad isLoaded" />
            </span>
            {lang === '' && <a href={items.virtualLink} target="_blank">Виртуальный тур</a>}
            {lang === '/en' && <a href={items.virtualLink} target="_blank">Virtual tour</a>}
            {lang === '/uz' && <a href={items.virtualLink} target="_blank">Virtual sayohat</a>}

          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    )
}

export default SubReatauranPage

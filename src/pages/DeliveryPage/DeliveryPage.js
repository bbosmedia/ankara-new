import React from 'react'
import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const DeliveryPage = () => {
  const breadcrumbs = useBreadcrumbs()
  breadcrumbs.map(link => {
    console.log(link.key);
  })
  console.log(breadcrumbs.length);
    return (
      
        <div>
  <div className="ya-banner">
    <img className="img-fluid w-100 lazyLoad isLoaded" src="/images/delivery/banner.jpg" />
  </div>
  <div className="container-fluid ya-container-fluid">
    <div className="ya-page-block">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ya-breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="nuxt-link-active"> Главная </Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active"> Доставка </li>
        </ol>
      </nav>
      <h1 className="ya-group-title">Доставка</h1>
      <div className="ya-page-text">
        <div className="media ya-delivery-info">
          <div className="media-img">
            <img className="img-fluid lazyLoad isLoaded" src="/images/delivery/ic_phone.8f935c8.svg" />
            <img className="img-fluid ya-line lazyLoad isLoaded" src="/images/delivery/line.svg" />
          </div>
          <div className="media-body">
            <p> По всем интересующим Вас вопросам просим звонить на единый номер <strong>1089</strong>, где Вас <br />обязательно проконсультирует наш Специалист. </p>
          </div>
        </div>
        <div className="media ya-delivery-info">
          <div className="media-img">
            <img className="img-fluid lazyLoad isLoaded" src="/images/delivery/telegram.svg" />
            <img className="img-fluid ya-line lazyLoad isLoaded" src="/images/delivery/line.svg" />
          </div>
          <div className="media-body">
            <p> Вы можете написать нам по телеграмму (90) 933-26-76 и воспользоваться телеграмм ботом <a href="https://t.me/yaponamamabot" target="_blank">@yaponamamabot</a>
            </p>
          </div>
        </div>
        <div className="media ya-delivery-info">
          <div className="media-img">
            <img className="img-fluid lazyLoad isLoaded" src="/images/delivery/ic_car.04c8d5f.svg" />
            <img className="img-fluid ya-line lazyLoad isLoaded" src="/images/delivery/line.svg" />
          </div>
          <div className="media-body">
            <p>Доставка по городу Ташкент - 10000 сум.</p>
            <p className="mb-0 d-none"> Доставка по городу Ташкент при заказе от 80000 сум - бесплатная </p>
            <p className="mb-5"> Доставляем только в пределах города Ташкент (не доставляем за посты города Ташкент) </p> Команда <strong>YaponaMama</strong> желает Вам удачного дня и отменного аппетита!
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default DeliveryPage

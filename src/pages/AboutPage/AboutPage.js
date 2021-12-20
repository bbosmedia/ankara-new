import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div>
   <div className="ya-banner"><img className="img-fluid w-100 lazyLoad isLoaded" src="https://yaponamama.uz/_nuxt/img/delivery.0085133.jpg" /></div>
   <div className="container-fluid ya-container-fluid">
      <div className="ya-page-block">
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb ya-breadcrumb">
               <li className="breadcrumb-item"><Link to="/" className="nuxt-link-active">
                  Главная
                  </Link>
               </li>
               <li aria-current="page" className="breadcrumb-item active">
                  О нас
               </li>
            </ol>
         </nav>
         <h1 className="ya-group-title">О нас</h1>
         <div className="ya-page-text">
            <p><strong>Yaponamama&nbsp;</strong>- это паназиатская кухня Fusion.</p>
            <p>Бренд Шеф повар соединил традиционную, многовековую практику приготовления суши с новшествами современного быта и ярких идей.&nbsp;<br />
               <br />
               Мы используем океаническую рыбу как основу здорового питания и вкладываем частичку своей души в приготовление каждого заказа!<br />
               <br />
               Моря и океаны далеки от нас, но это не мешает нам творить свежие и идеальные на вкус блюда. И все потому-что мы работаем с лучшими поставщиками морепродуктов с самого открытия ресторана, завоевывая сердца и доверие миллионов людей!&nbsp;<br />
               <br />
               Наши цели-воспитывать удовольствие от потребляемой пищи и мы двигаемся в верном направлении.
            </p>
         </div>
      </div>
      </div>
   </div>
    )
}

export default AboutPage

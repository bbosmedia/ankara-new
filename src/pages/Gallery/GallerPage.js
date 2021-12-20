import React from 'react'
import { Link } from 'react-router-dom'

const GallerPage = () => {
    return (
        <div className="container-fluid ya-container-fluid">
   <div className="ya-page-block">
      <nav aria-label="breadcrumb">
         <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="nuxt-link-active">
               Главная
               </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
               Галерея
            </li>
         </ol>
      </nav>
      <h1 className="ya-group-title">Галерея</h1>
      <div className="ya-gallery-grid">
         <div className="ya-gallery-card">
            <img alt="Озеленяем Ташкент" src="https://cdn.yaponamama.uz/gallery/102_1637307330.jpg" className="lazyLoad isLoaded" /> 
            <div className="ya-gallery-card__content"><a href="/gallery/11" className="" title="Озеленяем Ташкент">Озеленяем Ташкент</a></div>
         </div>
         <div className="ya-gallery-card">
            <img alt="Открытие бухарского филиала" src="https://cdn.yaponamama.uz/gallery/102_1632921859.jpg" className="lazyLoad isLoaded" /> 
            <div className="ya-gallery-card__content"><a href="/gallery/10" className="" title="Открытие бухарского филиала">Открытие бухарского филиала</a></div>
         </div>
         <div className="ya-gallery-card">
            <img alt="открытие Yaponamama 7" src="https://cdn.yaponamama.uz/gallery/25_1582115341.jpg" className="lazyLoad isLoaded" /> 
            <div className="ya-gallery-card__content"><a href="/gallery/9" className="" title="открытие Yaponamama 7">открытие Yaponamama 7</a></div>
         </div>
         <div className="ya-gallery-card">
            <img alt="Открытие Yapona Mama KIDS" src="https://cdn.yaponamama.uz/gallery/9_1557300839.jpeg" className="lazyLoad isLoaded" /> 
            <div className="ya-gallery-card__content"><a href="/gallery/7" className="" title="Открытие Yapona Mama KIDS">Открытие Yapona Mama KIDS</a></div>
         </div>
         <div className="ya-gallery-card">
            <img alt="8 Марта" src="https://cdn.yaponamama.uz/gallery/9_1553342550.jpg" className="lazyLoad isLoaded" /> 
            <div className="ya-gallery-card__content"><a href="/gallery/6" className="" title="8 Марта">8 Марта</a></div>
         </div>
         <div className="ya-gallery-card">
            <img alt="Навруз 2019 в Yapona Mama" src="https://cdn.yaponamama.uz/gallery/1_1553341864.jpg" className="lazyLoad isLoaded" /> 
            <div className="ya-gallery-card__content"><a href="/gallery/4" className="" title="Навруз 2019 в Yapona Mama">Навруз 2019 в Yapona Mama</a></div>
         </div>
      </div>
   </div>
</div>
    )
}

export default GallerPage

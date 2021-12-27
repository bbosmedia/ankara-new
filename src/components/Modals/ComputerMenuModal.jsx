import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './computerMenu.css'
import useBreadcrumbs from "use-react-router-breadcrumbs";

const ComputerMenuModal = ({computerMenu, changeComputerMenu}) => {
  const [lang, setLang] = useState("/ru");
  const breadcrumbs = useBreadcrumbs();
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
  }, [breadcrumbs]);
    return (
        <div  id="navModal___BV_modal_outer_" className={computerMenu ? 'active-language-modal' : 'notactive-language-modal'}>
  <div id="navModal" role="dialog" aria-describedby="navModal___BV_modal_body_" className="modal show ya-nav-modal" aria-modal="true" style={{display: 'block'}}>
    <div className="modal-dialog modal-md modal-dialog-centered">
      <div id="navModal___BV_modal_content_"  className="modal-content">
        <div id="navModal___BV_modal_body_" className="modal-body">
          <button onClick={() =>{setTimeout(changeComputerMenu, 500)}}  type="button" data-dismiss="modal" aria-label="Закрыть" className="close ya-close">
            <img  height="30" src="/images/close.svg" className="lazyLoad isLoaded" />
          </button>
          <div  className="ya-nav-menu text-center d-flex justify-content-center align-items-center h-100 w-100">
            {lang === '/ru' && <ul  className="list-unstyled">
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/about" >О нас</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/menu" >Меню</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}}  to="/actions" >Акции</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/restaurants" >Рестораны</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/delivery" >Доставка</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/gallery" >Галерея</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/contacts" >Контакты</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/offer" >Публичная оферта</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/rules" >Правила посещения ресторана</Link>
              </li>
            </ul>}
            {lang === '/en' && <ul  className="list-unstyled">
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/about" >About Us</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/menu" >Menu</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}}  to="/en/actions" >Sales</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/restaurants" >Restaurants</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/delivery" >Delivery</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/gallery" >Gallery</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/contacts" >Contacts</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/offer" >Public Offer</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/en/rules" >Restaurant Visiting Rules</Link>
              </li>
            </ul>}
            {lang === '/uz' && <ul  className="list-unstyled">
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/about" >Biz Haqimizda</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/menu" >Menu</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/actions" >Aksiyalar</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/restaurants" >Restoranlar</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/delivery" >Yetkazib Berish</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/gallery" >Galleriya</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/contacts" >Aloqa</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/offer" >Ommaviy Taklif</Link>
              </li>
              <li >
                <Link onClick={() =>{setTimeout(changeComputerMenu, 500)}} to="/uz/rules" >Restoranga Kelish Shartlari</Link>
              </li>
            </ul>}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="navModal___BV_modal_backdrop_" className="modal-backdrop"></div>
</div>
    )
}

export default ComputerMenuModal

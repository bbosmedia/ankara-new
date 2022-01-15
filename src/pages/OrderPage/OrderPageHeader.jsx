import React from 'react'
import { Link } from 'react-router-dom'

const OrderPageHeader = ({lang}) => {
    if(lang === "/uz"){
        return (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ya-breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/uz" className="nuxt-link-active">
                    Bosh Sahifa
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/uz/profile/" className="nuxt-link-active">
                    Profil
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Buyurtma
                </li>
              </ol>
            </nav>
        )
    }else if(lang === "/en"){
        return (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ya-breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/en" className="nuxt-link-active">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/en/profile" className="nuxt-link-active">
                    Profile
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Order
                </li>
              </ol>
            </nav>
        )
    }else{
        return (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ya-breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="nuxt-link-active">
                    Главная
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/profile" className="nuxt-link-active">
                    Профиль
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Заказ
                </li>
              </ol>
            </nav>
        )
    }
}

export default OrderPageHeader

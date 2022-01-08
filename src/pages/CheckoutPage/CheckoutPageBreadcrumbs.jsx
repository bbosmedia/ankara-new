import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutPageBreadcrumbs = ({lang}) => {
    return (
        <nav  aria-label="breadcrumb">
        <ol  className="breadcrumb ya-breadcrumb">
           <li  className="breadcrumb-item">
               {lang === '/ru' && <Link  to="/" className="nuxt-link-active">Главная</Link>}
               {lang === '/uz' && <Link  to="/uz" className="nuxt-link-active">Bosh Sahifa</Link>}
               {lang === '/en' && <Link  to="/en" className="nuxt-link-active">Home</Link>}
           </li>
           {lang === '/ru' && <li  aria-current="page" className="breadcrumb-item active">Оформление заказа</li>}
           {lang === '/uz' && <li  aria-current="page" className="breadcrumb-item active">Buyrtmani rasmiylashtirish</li>}
           {lang === '/en' && <li  aria-current="page" className="breadcrumb-item active">Checkout</li>}
        </ol>
     </nav>
    )
}

export default CheckoutPageBreadcrumbs

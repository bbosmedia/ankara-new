import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantsPageBreadCrumb = ({lang}) => {
    if(lang === '/en'){
        return(
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb ya-breadcrumb">
                  <li className="breadcrumb-item"><Link to="/en" className="nuxt-link-active">
                  Home
                     </Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                  Restaurants
                  </li>
               </ol>
            </nav>
        )
    }else if(lang === '/uz'){
        return(
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb ya-breadcrumb">
                  <li className="breadcrumb-item"><Link to="/uz" className="nuxt-link-active">
                  Bosh sahifa
                     </Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                  Restoranlar
                  </li>
               </ol>
            </nav>
        )
    }else{
        return (
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb ya-breadcrumb">
                  <li className="breadcrumb-item"><Link to="/" className="nuxt-link-active">
                     Главная
                     </Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                     Рестораны
                  </li>
               </ol>
            </nav>
        )
    }
}

export default RestaurantsPageBreadCrumb

import React from 'react'
import { Link } from 'react-router-dom'

const ProfilePageBreadCrumbs = ({lang}) => {
    if(lang === '/uz'){
        return(
            <nav aria-label="breadcrumb">
         <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
            <Link to="/uz" className="nuxt-link-active">
               Bosh Sahifa
            </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
               Profil
            </li>
         </ol>
      </nav>
        )
    }else if(lang === '/en'){
        return(
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb ya-breadcrumb">
               <li className="breadcrumb-item">
               <Link to="/en" className="nuxt-link-active">
                  Home
                  </Link>
               </li>
               <li aria-current="page" className="breadcrumb-item active">
                  Profile
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
                <li aria-current="page" className="breadcrumb-item active">
                   Профиль
                </li>
             </ol>
          </nav>
        )
    }
}

export default ProfilePageBreadCrumbs

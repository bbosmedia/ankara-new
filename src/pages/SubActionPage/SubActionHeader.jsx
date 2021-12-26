import React from 'react'
import { Link } from 'react-router-dom'

const SubActionHeader = ({lang, titleRu, titleUz, titleEn}) => {
    if(lang === "/uz"){
        return(
            <>
            <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/uz" className="nuxt-link-active"> Bosh Sahifa </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/uz/actions" className="nuxt-link-active"> Aksiyalar </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active"> {titleUz} </li>
          </ol>
        </nav>
        <h1 className="ya-group-title">{titleUz}</h1>
            </>
        )
    }else if(lang === "/en"){
        return(
            <>
            <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/en" className="nuxt-link-active"> Bosh Sahifa </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/en/actions" className="nuxt-link-active"> Sales </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active"> {titleEn} </li>
          </ol>
        </nav>
        <h1 className="ya-group-title">{titleEn}</h1>
            </>
        ) 
    }else{
        return(
            <>
            <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="nuxt-link-active"> Главная </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/actions" className="nuxt-link-active"> Акции </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active"> {titleRu}</li>
          </ol>
        </nav>
        <h1 className="ya-group-title">{titleRu}</h1>
            </>
        )
    }
}

export default SubActionHeader

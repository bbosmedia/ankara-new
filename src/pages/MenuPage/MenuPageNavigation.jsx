import React from 'react';
import { Link, useParams } from 'react-router-dom';


const MenuPageNavigation = ({lang, minimenu}) => {
    const {id} = useParams()
    return (
        <nav className="navbar navbar-expand navbar-light ya-menu-nav">
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                {minimenu.map(item=>{
                    if(lang === '/uz'){
                        return (<Link key={item.id} to={`/uz/menu/${item.id}`} className={`${item.id === parseInt(id) ? "nav-item nav-link nuxt-link-exact-active active" : "nav-item nav-link"}`} aria-current="page">
                        {item.nameUz}
                    </Link>)
                    }else if(lang === '/en'){
                        return (<Link key={item.id} to={`/en/menu/${item.id}`} className={`${item.id === parseInt(id) ? "nav-item nav-link nuxt-link-exact-active active" : "nav-item nav-link"}`} aria-current="page">
                        {item.nameEn}
                    </Link>)
                    }else{
                        return (<Link key={item.id} to={`/menu/${item.id}`} className={`${item.id === parseInt(id) ? "nav-item nav-link nuxt-link-exact-active active" : "nav-item nav-link"}`} aria-current="page">
                        {item.nameRu}
                    </Link>)
                    }
                })}
              </div>
            </div>
          </nav>
    )
}

export default MenuPageNavigation

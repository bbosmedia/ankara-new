import React from 'react';
import { Link } from 'react-router-dom';


const MenuPageNavigation = ({lang, minimenu}) => {
    return (
        <nav className="navbar navbar-expand navbar-light ya-menu-nav">
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                {minimenu.map(item=>{
                    if(lang === '/uz'){
                        return (<Link key={item.id} to={`/uz/menu/${item.id}`} className="nav-item nav-link" aria-current="page">
                        {item.nameUz}
                    </Link>)
                    }else if(lang === '/en'){
                        return (<Link key={item.id} to={`/en/menu/${item.id}`} className="nav-item nav-link" aria-current="page">
                        {item.nameEn}
                    </Link>)
                    }else{
                        return (<Link key={item.id} to={`/menu/${item.id}`} className="nav-item nav-link" aria-current="page">
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

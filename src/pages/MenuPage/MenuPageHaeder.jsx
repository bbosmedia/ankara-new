import React from 'react'
import { Link} from "react-router-dom";

const MenuPageHaeder = ({lang}) => {
    return (
        <>
            <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              {lang === "/ru" && (
                <Link to="/" className="nuxt-link-active">
                  Главная
                </Link>
              )}
              {lang === "/en" && (
                <Link to="/en" className="nuxt-link-active">
                  Home
                </Link>
              )}
              {lang === "/uz" && (
                <Link to="/uz" className="nuxt-link-active">
                  Bosh Sahifa
                </Link>
              )}
            </li>
            {lang === "/ru" && (
              <li aria-current="page" className="breadcrumb-item active">
                
                Меню
              </li>
            )}
            {lang === "/uz" && (
              <li aria-current="page" className="breadcrumb-item active">
                
                Menu
              </li>
            )}
            {lang === "/en" && (
              <li aria-current="page" className="breadcrumb-item active">
                
                Menu
              </li>
            )}
          </ol>
        </nav>
        {lang === "/ru" && <h1 className="ya-group-title">Меню</h1>}
        {lang === "/uz" && <h1 className="ya-group-title">Menu</h1>}
        {lang === "/en" && <h1 className="ya-group-title">Menu</h1>}
        </>
    )
}

export default MenuPageHaeder

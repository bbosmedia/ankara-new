import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { updateSearchModal } from "../../../redux/FoodMenu";
import ComputerMenuIcon from "./ComputerMenuIcon";

const ComputerMenuEn = ({langModel, changeComputerMenu, openCartMenu, changeLogin, accessToken}) => {
  const dispatch = useDispatch()
  const breadcrumbs = useBreadcrumbs();
  function navCalss(first) {
    if (breadcrumbs.length === 3) {
      if (breadcrumbs[2].key === first) {
        return "nav-item nav-link nuxt-link-active";
      } else {
        return "nav-item nav-link";
      }
    } else {
      return "nav-item nav-link";
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light ya-nav">
      <div className="container-fluid">
        <Link
          to="/en"
          aria-current="page"
          title="Yaponamama"
          className="navbar-brand nuxt-link-exact-active nuxt-link-active"
        >
          <img
            height="45"
            alt="Yaponamama"
            loading="lazy"
            src="/images/logo.svg"
            className="d-inline-block align-top lazyLoad isLoaded"
          />
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav ya-navbar align-items-center mr-auto">
            <a
              aria-current="page"
              className="nav-item nav-link ya-city-link nuxt-link-exact-active nuxt-link-active"
              role="button"
            >
              Tashkent
            </a>
          </div>
          <div className="navbar-nav ya-navbar align-items-center ml-auto">
            <Link to="/en/menu" className={navCalss("/en/menu")}>
              Menu
            </Link>
            <Link to="/en/restaurants" className={navCalss("/en/restaurants")}>
              Restaurants
            </Link>
            <Link to="/en/gallery" className={navCalss("/en/gallery")}>
              Gallery
            </Link>
          </div>
          <div className="navbar-nav ya-opt-navbar align-items-center mr-0">
            <a
            onClick={langModel}
              aria-current="page"
              className="nav-item nav-link ya-lang nuxt-link-exact-active nuxt-link-active ya-en"
              role="button"
            >
              English
            </a>
            <Link to="/en/actions" className="nav-item nav-link ya-nav-action">
              Sales
            </Link>
            <a href="tel:1089" className="nav-item nav-link ya-number-link">
              1089
            </a>
            <a
              onClick={()=>dispatch(updateSearchModal())}
              className="nav-item nav-link ya-cart-icon border-left-0 pt-0 pb-0"
            >
              <img
                alt="Search Icon"
                loading="lazy"
                height="26"
                src="/images/search.svg"
                className="d-inline-block align-middle lazyLoad isLoaded"
              />
            </a>
            {accessToken.length === 0 && <a onClick={() =>changeLogin()}
              aria-current="page"
              className="nav-item nav-link border-left-0 pt-0 pb-0 nuxt-link-exact-active nuxt-link-active"
              role="button"
            >
              <img
                alt="Profile Icon"
                loading="lazy"
                height="25"
                src="/images/ic_profile.d6b094d.svg"
                className="d-inline-block align-middle lazyLoad isLoaded"
              />
            </a>}
            {accessToken.length > 0 && <Link to='/en/profile'
              aria-current="page"
              className="nav-item nav-link border-left-0 pt-0 pb-0 nuxt-link-exact-active nuxt-link-active"
              role="button"
            >
              <img
                alt="Profile Icon"
                loading="lazy"
                height="25"
                src="/images/ic_profile.d6b094d.svg"
                className="d-inline-block align-middle lazyLoad isLoaded"
              />
            </Link>}
            <ComputerMenuIcon openCartMenu={openCartMenu} />
            <a
            onClick={changeComputerMenu}
              aria-current="page"
              className="nav-item nav-link border-left-0 pt-0 pb-0 pl-4 nuxt-link-exact-active nuxt-link-active"
              role="button"
            >
              <img
                alt="Ankara Kebab"
                loading="lazy"
                height="20"
                src="/images/menu_bar.svg"
                className="d-inline-block align-middle lazyLoad isLoaded"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ComputerMenuEn;

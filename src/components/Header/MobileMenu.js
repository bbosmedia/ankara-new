import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
    return (
        <div className="ya-mobile-menu d-flex d-md-none">
            <Link to="/" aria-current="page" className="nuxt-link-exact-active nuxt-link-active" role="button">
                <img  loading="lazy" height="16" src="/images/menu_bar.svg" className="d-inline-block align-middle lazyLoad" />
            </Link>
            <Link to="/" aria-current="page" title="Yaponamama" className="navbar-brand nuxt-link-exact-active nuxt-link-active">
                <img height="35" alt="Yaponamama" loading="lazy" src="/images/logo.svg" className="d-inline-block align-top lazyLoad" />
            </Link> 
            <div className="d-flex">
                <a href="#" className="nav-item nav-link ya-cart-icon border-left-0 pt-0 pb-0">
                    <img  loading="lazy" height="26" src="/images/search.svg" className="d-inline-block align-middle lazyLoad" />
                </a>
                <Link to="/profile" className="p-0 mr-4">
                    <img  loading="lazy" height="20" src="/images/ic_profile.d6b094d.svg" className="d-inline-block align-middle lazyLoad" />
                </Link> 
                <a href="#" className="ya-cart-icon">
                    <img loading="lazy" height="20" src="/images/ic_cart.01c3be9.svg" className="d-inline-block align-middle lazyLoad" />
                </a>
            </div>
        </div>
    )
}

export default MobileMenu

import React from 'react'
import { useSelector } from 'react-redux'
import {selectCartTotalQuantity} from '../../../redux/CartRedux'

const ComputerMenuIcon = ({openCartMenu}) => {
    const cartTotalQuantity = useSelector(selectCartTotalQuantity)
    if(cartTotalQuantity > 0){
        return (
            <a onClick={openCartMenu}  className="nav-item nav-link ya-cart-icon border-left-0 pt-0 pb-0"><img loading="lazy" height="25" src="/images/ic_cart.01c3be9.svg" className="d-inline-block align-middle lazyLoad isLoaded" /> <span className="badge ya-badge">{cartTotalQuantity}</span></a>
        )
    } else{
        return(
            <a
            onClick={openCartMenu} 
              className="nav-item nav-link ya-cart-icon border-left-0 pt-0 pb-0"
            >
              <img
                alt="Ankara Kebab"
                loading="lazy"
                height="25"
                src="/images/ic_cart.01c3be9.svg"
                className="d-inline-block align-middle lazyLoad isLoaded"
              />
            </a>
        )
    }
}

export default ComputerMenuIcon

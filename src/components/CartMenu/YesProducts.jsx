import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {selectCartTotalAmount, addToCart, decreaseCart} from '../../redux/CartRedux'
import { numberWithSpaces } from '../../functionsAnkara'

const YesProducts = ({lang, items, changeCart}) => {
    const totalAmount = useSelector(selectCartTotalAmount)
    const dispatch = useDispatch()
   
        return(
            <>
            <div id="cartModal___BV_modal_body_" className="modal-body">
           <div className="cart-modal-content">
             {items.map(item =>{
                 return(
                    <div key={item.id} className="card mc-item selected-product">
                    <Link to={`product/${item.id}`} >
                      {lang === '/uz' && <img alt={item.nameUz} loading="lazy" className="card-img lazyLoad isLoaded" src={item.thumbnail} />}
                      {lang === '/ru' && <img alt={item.nameRu} loading="lazy" className="card-img lazyLoad isLoaded" src={item.thumbnail} />}
                      {lang === '/en' && <img alt={item.nameEn} loading="lazy" className="card-img lazyLoad isLoaded" src={item.thumbnail} />}
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">
                          {lang === '/uz' && <Link to={`product/${item.id}`} >{item.nameUz} </Link>}
                          {lang === '/ru' && <Link to={`product/${item.id}`} >{item.nameRu} </Link>}
                          {lang === '/en' && <Link to={`product/${item.id}`} >{item.nameEn} </Link>}
                      </h5>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="card-price">{numberWithSpaces(item.price)}</p>
                        <div className="ya-product-controls">
                          <button onClick={()=>dispatch(decreaseCart(item))} className="ya-product-minus">-</button>
                          <span className="ya-product-quantity">{item.cartQuantity}</span>
                          <button onClick={()=>dispatch(addToCart(item))} className="ya-product-plus">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                 )
             })}
           </div>
         </div>
         <footer id="cartModal___BV_modal_footer_" className="modal-footer">
             {lang === '/ru' && <Link to='/checkout' onClick={changeCart} className="btn ya-btn-red d-flex justify-content-between w-100 px-4">
             <span>Оформить заказ</span>
             <span>{numberWithSpaces(totalAmount)} сум</span>
           </Link>}
           {lang === '/en' && <Link onClick={() => changeCart()} to='/en/checkout'  className="btn ya-btn-red d-flex justify-content-between w-100 px-4">
             <span>Checkout</span>
             <span>{numberWithSpaces(totalAmount)} сум</span>
           </Link>}
           {lang === '/uz' && <Link onClick={() => changeCart()} to='/uz/checkout'  className="btn ya-btn-red d-flex justify-content-between w-100 px-4">
             <span>Buyurtmani Rasmiylashtirish</span>
             <span>{numberWithSpaces(totalAmount)} so'm</span>
           </Link>}
         </footer>
            </>
        )
   
}

export default YesProducts

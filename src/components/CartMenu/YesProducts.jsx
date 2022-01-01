import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {selectCartTotalAmount, addToCart, decreaseCart} from '../../redux/CartRedux'

const YesProducts = ({lang, items}) => {
    const totalAmount = useSelector(selectCartTotalAmount)
    const dispatch = useDispatch()
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
        return(
            <>
            <div id="cartModal___BV_modal_body_" className="modal-body">
           <div className="cart-modal-content">
             {items.map(item =>{
                 return(
                    <div className="card mc-item selected-product">
                    <Link to={`product/${item.id}`} >
                      <img alt="Сет Унаги предзаказ" loading="lazy" className="card-img lazyLoad isLoaded" src={item.thumbnail} />
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
             {lang === '/ru' && <button type="button" className="btn ya-btn-red d-flex justify-content-between w-100 px-4">
             <span>Оформить заказ</span>
             <span>{numberWithSpaces(totalAmount)} сум</span>
           </button>}
           {lang === '/en' && <button type="button" className="btn ya-btn-red d-flex justify-content-between w-100 px-4">
             <span>Checkout</span>
             <span>{numberWithSpaces(totalAmount)} сум</span>
           </button>}
           {lang === '/uz' && <button type="button" className="btn ya-btn-red d-flex justify-content-between w-100 px-4">
             <span>Buyurtmani Rasmiylashtirish</span>
             <span>{numberWithSpaces(totalAmount)} so'm</span>
           </button>}
         </footer>
            </>
        )
   
}

export default YesProducts

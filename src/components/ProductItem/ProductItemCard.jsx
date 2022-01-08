import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, selectCart, decreaseCart} from "../../redux/CartRedux";
import './homePageProductItem.css'

const ProductItemCard = ({lang, item}) => {
    const [qunatity, setQunatity] = useState(0)
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const cart = useSelector(selectCart);
    const dispatch = useDispatch()
    useEffect(() => {
        const itemIndex = cart.findIndex(product => product.id === item.id);
        if(itemIndex >=0){
            setQunatity(cart[itemIndex].cartQuantity);
        }else{
            setQunatity(0);
        }
    }, [cart])
    return (
        <div key={item.id} className="col-sm-12 col-md-4 col-lg-3 px-0">
                        <div className="ya-product-item">
                            <div className="card hvr-grow w-100">
                                {lang === '/uz' && <Link to={`/uz/product/${item.id}`} ><img alt={item.nameUz} className="card-img-top lazyLoad isLoaded" src={item.thumbnail} /></Link>} 
                                {lang === '/en' && <Link to={`/en/product/${item.id}`} ><img alt={item.nameEn} className="card-img-top lazyLoad isLoaded" src={item.thumbnail} /></Link>} 
                                {lang === '/ru' && <Link to={`/product/${item.id}`} ><img alt={item.nameRu} className="card-img-top lazyLoad isLoaded" src={item.thumbnail} /></Link>} 
                                <div className="card-body">
                                {lang === '/uz' && <h5 className="card-title"><Link to={`/uz/product/${item.id}`} >{item.nameUz}</Link></h5>}
                                {lang === '/en' && <h5 className="card-title"><Link to={`/en/product/${item.id}`} >{item.nameEn}</Link></h5>}
                                {lang === '/ru' && <h5 className="card-title"><Link to={`/product/${item.id}`} >{item.nameRu}</Link></h5>}
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="card-price">{numberWithSpaces(item.price)}</p>
                                    {qunatity === 0 && <>
                                        {lang === '/ru' && <a onClick={() =>dispatch(addToCart(item))} className="btn btn-danger btn-want">Хочу</a>}
                                    {lang === '/uz' && <a onClick={() =>dispatch(addToCart(item))} className="btn btn-danger btn-want">Hohlayman</a>}
                                    {lang === '/en' && <a onClick={() =>dispatch(addToCart(item))} className="btn btn-danger btn-want">Want</a>}
                                    </>}
                                    {qunatity > 0 && <div className="ya-product-controls"><button onClick={()=>dispatch(decreaseCart(item))} className="ya-product-minus">-</button> <span className="ya-product-quantity">
                                      {qunatity}
                                      </span> <button  onClick={() =>dispatch(addToCart(item))} className="ya-product-plus">+</button></div>}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ProductItemCard

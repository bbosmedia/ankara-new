import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePageProductsItems = ({lang, id}) => {

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const [items, setItems] = useState(null);
    const fetchGalItems = async () => {
        try {
          var items = await axios.get(`https://api.ankara.uz/shop/products/category/${id}`);
          if(items.status === 200){
            setItems(items.data);
          }
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        fetchGalItems();
      }, [lang]);
    
      if (items === null) return null;
    return (
        <div key={id} className="row ml-0 mr-0">
                    {items.map(item =>{
                        return(
                            <div key={item.id} className="col-sm-12 col-md-4 col-lg-3 px-0">
                        <div className="ya-product-item">
                            <div className="card hvr-grow w-100">
                                {lang === '/uz' && <Link to={`/uz/product/${item.id}`} ><img alt={item.nameUz} className="card-img-top lazyLoad isLoaded" src={item.thumbnail} /></Link>} 
                                {lang === '/en' && <Link to={`/en/product/${item.id}`} ><img alt={item.nameEn} className="card-img-top lazyLoad isLoaded" src={item.thumbnail} /></Link>} 
                                {lang === '' && <Link to={`/product/${item.id}`} ><img alt={item.nameRu} className="card-img-top lazyLoad isLoaded" src={item.thumbnail} /></Link>} 
                                <div className="card-body">
                                {lang === '/uz' && <h5 className="card-title"><Link to={`/uz/product/${item.id}`} >{item.nameUz}</Link></h5>}
                                {lang === '/en' && <h5 className="card-title"><Link to={`/en/product/${item.id}`} >{item.nameEn}</Link></h5>}
                                {lang === '' && <h5 className="card-title"><Link to={`/product/${item.id}`} >{item.nameRu}</Link></h5>}
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="card-price">{numberWithSpaces(item.price)}</p>
                                    {lang === '' && <a className="btn btn-danger btn-want">Хочу</a>}
                                    {lang === '/uz' && <a className="btn btn-danger btn-want">Hohlayman</a>}
                                    {lang === '/en' && <a className="btn btn-danger btn-want">Want</a>}
                                    <div class="ya-product-controls"><a href="#" class="ya-product-minus">-</a> <span class="ya-product-quantity">1</span> <a href="#" class="ya-product-plus">+</a></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })}
        </div>
    )
}

export default HomePageProductsItems

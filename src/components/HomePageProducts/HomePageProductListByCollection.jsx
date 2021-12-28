import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePageProductListByCollection = ({lang, id}) => {
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const [items, setItems] = useState(null);
    const fetchGalItems = async () => {
        try {
          var items = await axios.get(`https://api.ankara.uz/shop/products/collection/${id}`);
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
                                <Link to={`/product/${item.id}`} className=""><img alt="(Турбо) Крабовый салат" className="card-img-top lazyLoad isLoaded" src={item.thumbnail} /></Link> 
                                <div className="card-body">
                                {lang === '/uz' && <h5 className="card-title"><Link to={`/product/${item.id}`} className="">{item.nameUz}</Link></h5>}
                                {lang === '/en' && <h5 className="card-title"><Link to={`/product/${item.id}`} className="">{item.nameEn}</Link></h5>}
                                {lang === '' && <h5 className="card-title"><Link to={`/product/${item.id}`} className="">{item.nameRu}</Link></h5>}
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="card-price">{numberWithSpaces(item.price)}</p>
                                    <a href="#" className="btn btn-danger btn-want">Хочу</a>
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

export default HomePageProductListByCollection


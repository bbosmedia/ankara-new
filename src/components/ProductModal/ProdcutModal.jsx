import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import './productModal.css'
import ProductModelQuantity from "./ProductModelQuantity";

const ProdcutModal = ({lang}) => {
  let { id } = useParams();
  const [items, setItems] = useState(null);
  const navigate = useNavigate();
  function closeMenu(){
    document.querySelector('body').classList.remove('modal-open'); 
    navigate(-1);
  }
  const fetchGalItems = async () => {
    try {
      var items = await axios.get(`https://api.ankara.uz/shop/products/${id}`);
      setItems(items.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect( async() => {
    await fetchGalItems();
    document.querySelector('body').classList.add('modal-open')
  }, [lang]);

  if (items === null) return null;
    return (
        <div id="productModal___BV_modal_outer_" style={{position: 'absolute', zIndex: 1040,}}>
  <div id="productModal" role="dialog" aria-describedby="productModal___BV_modal_body_" className="modal fade show ya-product-modal" aria-modal="true" style={{display: 'block'}}>
    <div className="modal-dialog modal-xl">
      <div id="productModal___BV_modal_content_"  className="modal-content">
        <div id="productModal___BV_modal_body_" className="modal-body">
          <div className="ya-product-modal-body">
            <div className="row mb-4">
              <div className="col-md-6">
                {lang === '' && <img alt={items.nameRu} className="ya-product-modal-img img-fluid lazyLoad isLoaded" src={items.photos[0].thumbnail} />}
                {lang === '/uz' && <img alt={items.nameUz} className="ya-product-modal-img img-fluid lazyLoad isLoaded" src={items.photos[0].thumbnail} />}
                {lang === '/en' && <img alt={items.nameEn} className="ya-product-modal-img img-fluid lazyLoad isLoaded" src={items.photos[0].thumbnail} />}
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  {lang === '' && <h3 className="mr-3">{items.nameRu}</h3>}
                  {lang === '/uz' && <h3 className="mr-3">{items.nameUz}</h3>}
                  {lang === '/en' && <h3 className="mr-3">{items.nameEn}</h3>}
                  <button type="button" onClick={() => closeMenu()} className="btn ya-close-btn btn-secondary btn-block"></button>
                </div>
                {lang === '' && <div className="ya-product-modal-detail"> <div dangerouslySetInnerHTML={{ __html: items.descriptionRu}} /></div>}
                {lang === '/uz' && <div className="ya-product-modal-detail"> <div dangerouslySetInnerHTML={{ __html: items.descriptionUz }} /></div>}
                {lang === '/en' && <div className="ya-product-modal-detail"><div dangerouslySetInnerHTML={{ __html: items.descriptionEn }} /></div>}
                <ProductModelQuantity lang={lang} items={items} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="productModal___BV_modal_backdrop_" className="modal-backdrop"></div>
</div>
    )
}

export default ProdcutModal

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import './productModal.css'

const ProdcutModal = ({lang}) => {
  const navigate = useNavigate();
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
  let { id } = useParams();
  const [items, setItems] = useState(null);
  const fetchGalItems = async () => {
    try {
      var items = await axios.get(`https://api.ankara.uz/shop/products/${id}`);
      setItems(items.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalItems();
  }, [lang]);

  if (items === null) return null;
    return (
        <div id="productModal___BV_modal_outer_" style={{position: 'absolute', zIndex: 1040}}>
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
                  <button type="button" onClick={() => navigate(-1)} className="btn ya-close-btn btn-secondary btn-block"></button>
                </div>
                {lang === '' && <div className="ya-product-modal-detail"> <div dangerouslySetInnerHTML={{ __html: items.descriptionRu}} /></div>}
                {lang === '/uz' && <div className="ya-product-modal-detail"> <div dangerouslySetInnerHTML={{ __html: items.descriptionUz }} /></div>}
                {lang === '/en' && <div className="ya-product-modal-detail"><div dangerouslySetInnerHTML={{ __html: items.descriptionEn }} /></div>}
                <div className="d-flex justify-content-between ya-product-modal-params">
                  {lang === '' && 
                  <>
                  <div className="ya-product-modal-price"> {numberWithSpaces(items.price)} сум </div>
                  <button className="btn btn-danger btn-want"> Хочу </button>
                  </>}
                  {lang === '/uz' && 
                  <>
                  <div className="ya-product-modal-price"> {numberWithSpaces(items.price)} so'm </div>
                  <button className="btn btn-danger btn-want">Hohlayman </button>
                  </>}
                  {lang === '/en' && 
                  <>
                  <div className="ya-product-modal-price"> {numberWithSpaces(items.price)} so'm </div>
                  <button className="btn btn-danger btn-want">Want</button>
                  </>}
                  <div class="ya-product-modal-controls"><a  class="ya-product-modal-minus">-</a> <span class="ya-product-modal-quantity">1</span> <a class="ya-product-modal-plus">+</a></div>
                </div>
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

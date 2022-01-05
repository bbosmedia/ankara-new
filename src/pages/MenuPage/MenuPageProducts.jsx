import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MenuPageProducts = ({lang}) => {
    var menus = null;
    const [menuitems, setMenuitems] =  useState(null);
  const [products, setProducts] =  useState(null);
  const fetchMenuItems = async() =>{
    try{
        var items = await axios.get('https://api.ankara.uz/shop/category')
        if(items.status === 200){
            menus = items.data;
          setMenuitems(items.data);
        }
    }catch(e){
        console.log(e);
    }
}
const fetchProductsByCollection = async({id}) =>{
    try{
        var items = await axios.get(`https://api.ankara.uz/shop/products/collection/${id}`)
        if(items.status === 200){
          setProducts(items.data);
        }
    }catch(e){
        console.log(e);
    }
  }
  
    const {id} = useParams()
    useEffect( async() => {
      await fetchMenuItems();
      if(id){
  
      }else{
        if(menus.length > 0){
          if(menus[0].isCollection){
            fetchProductsByCollection({id: menus[0].id})
          }else{
              console.log('Abbos')
          }
        }
      }
    }, [id])
    if(products === null) return null;
    return (
        <section className="pt-3">
            <div className="ya-menu-group py-4">
              <h1 className="ya-menu-title text-center mb-5">{menuitems[0].nameUz}</h1>
              <div className="row ml-0 mr-0">
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/6891524b-284d-4e7c-8abf-4c1b43f999b4"
                        
                      >
                        <img
                          alt="Soup with salmon"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632825395.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/6891524b-284d-4e7c-8abf-4c1b43f999b4"
                            
                          >
                            Soup with salmon
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Sliced tender salmon with vegetables in a fish broth.
                          Ingredients: Salmon Fish broth Vegetable oil Potato
                          Onion Carrot Bulgarian pepper Black pepper Green onion
                          Greens
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">25 000</p>
                          <div className="ya-product-controls">
                            <a href="#" className="ya-product-minus">
                              -
                            </a>
                            <span className="ya-product-quantity">1</span>
                            <a href="#" className="ya-product-plus">
                              +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default MenuPageProducts

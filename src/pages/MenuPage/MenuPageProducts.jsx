import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HomePageProductItem from '../../components/HomePageProducts/HomePageProductItem'

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
                {products.map(product =>{
                  return (<HomePageProductItem lang={lang} item={product} />)
                })}
              </div>
            </div>
          </section>
    )
}

export default MenuPageProducts

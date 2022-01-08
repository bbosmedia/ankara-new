import React, {useEffect, useState} from 'react'
import ProductItemCard from '../../components/ProductItem/ProductItemCard';
import axios from 'axios';

const CollectionProductList = ({id, lang, menuitem}) => {
    const [products, setProducts] = useState(null);
    const fetchProductsByCollection = async() =>{
        try{
            var items = await axios.get(`https://api.ankara.uz/shop/products/collection/${id}`)
            if(items.status === 200){
              setProducts(items.data);
            }
        }catch(e){
            console.log(e);
        }
      }
      const fetchProductsByCategory = async() =>{
        try{
            var items = await axios.get(`https://api.ankara.uz/shop/products/category/${id}`)
            if(items.status === 200){
              setProducts(items.data);
            }
        }catch(e){
            console.log(e);
        }
      }
    useEffect(() => {
        if(menuitem.isCollection){
            fetchProductsByCollection();
        }else{
            fetchProductsByCategory();
        }
    }, [id, lang, menuitem])
    return (
        <div id={id} key={id} className="ya-menu-group py-4" style={{background: '#FFF'}}>
            {lang === '/uz' && <h1 className="ya-menu-title text-center mb-5">{menuitem.nameUz}</h1>}
            {lang === '/ru' && <h1 className="ya-menu-title text-center mb-5">{menuitem.nameRu}</h1>}
            {lang === '/en' && <h1 className="ya-menu-title text-center mb-5">{menuitem.nameEn}</h1>}
   <div className="row ml-0 mr-0">
      {products && products.map(product => <ProductItemCard lang={lang} item={product} />)}
   </div>
</div>
    )
}

export default CollectionProductList

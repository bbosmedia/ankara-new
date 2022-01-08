import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import CollectionProductList from './CollectionProductList';

const CategoryWithChild = ({id, lang, menuitem}) => {
    const [children, setChildren] = useState(null);
    const fetchChildren = async() =>{
        try{
            var items = await axios.get(`https://api.ankara.uz/shop/category/${id}`)
            if(items.status === 200){
                setChildren(items.data);
            }
        }catch(e){
            console.log(e);
        }
      }
      useEffect(() => {
          console.log(id)
          fetchChildren();
      }, [])
    return (
        <div>
            {children && <div className="ya-menu-child mb-5">
                {children.map(child=>{
                    if(lang === '/uz'){
                        return(<Link key={child.id} to={`/uz/menu/#${child.id}`} className="btn btn-outline-dark mr-3">{child.nameUz}</Link>)
                    }else if(lang === '/en'){
                        return(<Link key={child.id} to={`/en/menu/#${child.id}`} className="btn btn-outline-dark mr-3">{child.nameEn}</Link>)
                    }else{
                        return(<Link key={child.id} to={`/menu/#${child.id}`} className="btn btn-outline-dark mr-3">{child.nameRu}</Link>)
                    }
                })}
            </div>}
            {children && children.map(child =><CollectionProductList key={child.id} id={child.id} lang={lang} menuitem={child} />)}
        </div>
    )
}

export default CategoryWithChild

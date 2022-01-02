import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MenuPageNavigation = ({lang}) => {
    const [minimenu, setMinimenu] =  useState([]);

    const fetchMenuItems = async() =>{
        try{
            var items = await axios.get('https://api.ankara.uz/shop/category')
            if(items.status === 200){
                setMinimenu(items.data);
            }
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchMenuItems()
    }, [lang])
    if(minimenu === null) return null;
    return (
        <nav className="navbar navbar-expand navbar-light ya-menu-nav">
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                {minimenu.map(item=>{
                    if(lang === '/uz'){
                        return (<Link to={`/uz/menu/${item.id}`} className="nav-item nav-link" aria-current="page">
                        {item.nameUz}
                    </Link>)
                    }else if(lang === '/en'){
                        return (<Link to={`/uz/menu/${item.id}`} className="nav-item nav-link" aria-current="page">
                        {item.nameEn}
                    </Link>)
                    }else{
                        return (<Link to={`/uz/menu/${item.id}`} className="nav-item nav-link" aria-current="page">
                        {item.nameRu}
                    </Link>)
                    }
                })}
              </div>
            </div>
          </nav>
    )
}

export default MenuPageNavigation

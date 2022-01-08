import React, {useState, useEffect} from 'react';
import MenuPageNavigation from "./MenuPageNavigation";
import MenuPageProducts from './MenuPageProducts';
import MenuPageHeader from './MenuPageHaeder'
import axios from 'axios';

const MenuPage = ({ lang }) => {
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
  return (
    <div key="id" className="container-fluid ya-container-fluid">
      <div className="ya-page-block">
        <MenuPageHeader />
        <div className="ya-page-text">
          {minimenu.length > 0 && <MenuPageNavigation lang={lang} minimenu={minimenu} />}
          {minimenu.length > 0 && <MenuPageProducts lang={lang} menuitems={minimenu} />}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageProductTitles from "./HomePageProductTitles";
import HomePageProductsItems from "./HomePageProductsItems";
import HomePageProductListByCollection from "./HomePageProductListByCollection";

const HomePageProducts = ({lang}) => {
    const [items, setItems] = useState(null);
    const fetchGalItems = async () => {
        try {
          var items = await axios.get(`https://api.ankara.uz/shop/category`);
          if(items.status === 200){
            setItems(items.data);
          }
        } catch (e) {
          throw e;
        }
      };
      useEffect(() => {
        fetchGalItems();
      }, [lang]);
    
      if (items === null) return null;
    return (
        <main>
        <div className="ya-menu-bloc">
            {items.map(item =>{
                return(
                    <div key={item.id} id={item.id} className="ya-menu-group">
                <div className="container-fluid ya-container-fluid">
                    <HomePageProductTitles id={item.id} lang={lang} nameUz={item.nameUz} nameEn={item.nameEn} nameRu={item.nameRu} />
                    {item.isCollection === false && <HomePageProductsItems lang={lang} id={item.id} />}
                    {item.isCollection === true && <HomePageProductListByCollection lang={lang} id={item.id} />}
                </div>
            </div>
                )
            })}
        </div>
        </main>
    )
}



export default HomePageProducts

import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageProductTitles from "./HomePageProductTitles";

const HomePageProducts = ({lang}) => {
    const [items, setItems] = useState(null);
    const fetchGalItems = async () => {
        try {
          var items = await axios.get(`https://api.ankara.uz/shop/category`);
          setItems(items.data);
          console.log(items.data);
        } catch (e) {
          console.log(e);
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
                </div>
            </div>
                )
            })}
        </div>
        </main>
    )
}



export default HomePageProducts

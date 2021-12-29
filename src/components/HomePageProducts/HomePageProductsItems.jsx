import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageProductItem from "./HomePageProductItem";



const HomePageProductsItems = ({lang, id}) => {

    const [items, setItems] = useState(null);
    const fetchGalItems = async () => {
        try {
          var items = await axios.get(`https://api.ankara.uz/shop/products/category/${id}`);
          if(items.status === 200){
            setItems(items.data);
          }
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        fetchGalItems();
      }, [lang]);
    
      if (items === null) return null;
    return (
        <div key={id} className="row ml-0 mr-0">
                    {items.map(item =>{
                        return(
                            <HomePageProductItem key={item.id} lang={lang} item={item} />
                        )
                    })}
        </div>
    )
}

export default HomePageProductsItems

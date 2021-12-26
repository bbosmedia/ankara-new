import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SubActionHeader from './SubActionHeader'

const SubActionPage = ({lang}) => {
    let { id } = useParams();
    const [items, setItems] = useState(null);
  const fetchGalItems = async () => {
    try {
      var items = await axios.get(`https://api.ankara.uz/promotions/${id}`);
      setItems(items.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalItems();
  }, [lang]);

 
  if(items === null) return null;
    return (
        <div>
            {lang === "" &&  <img alt={items.titleRu} className="img-fluid w-100 lazyLoad isLoaded" src={items.photo} />}
         {lang === "/uz" &&  <img alt={items.titleUz} className="img-fluid w-100 lazyLoad isLoaded" src={items.photo} />}
         {lang === "/en" &&  <img alt={items.titleEn} className="img-fluid w-100 lazyLoad isLoaded" src={items.photo} />}
  
  <div className="container-fluid ya-container-fluid">
    <div className="ya-page-block">
      <div>
        <SubActionHeader lang={lang} titleEn={items.titleEn} titleRu={items.titleRu} titleUz={items.titleUz} />
        <div className="ya-page-text">
         {lang === "" &&  <div dangerouslySetInnerHTML={{__html: items.contentRu}}/>}
         {lang === "/uz" &&  <div dangerouslySetInnerHTML={{__html: items.contentUz}}/>}
         {lang === "/en" &&  <div  dangerouslySetInnerHTML={{__html: items.contentEn}}/>}
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default SubActionPage

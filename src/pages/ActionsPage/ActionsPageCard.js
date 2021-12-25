import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ActionsPageCard = ({lang}) => {
    const [items, setItems] = useState(null);
  const fetchGalItems = async () => {
    try {
      var items = await axios.get(`https://api.ankara.uz/promotions`);
      setItems(items.data);
      console.log(items.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalItems();
  }, [lang]);

  if(items === null) return null;
  return(
    <div className="ya-page-text">
      <div className="ya-actions-list">
        <div className="row">
          {items.map(item=>{
            if(lang === '/uz'){
              return <ActionsCard key={item.id} lang={lang} title={item.titleUz} photo={item.photo} id={item.id} date={item.created_at} />
            }else if(lang === '/en'){
              return <ActionsCard key={item.id} lang={lang} title={item.titleEn} photo={item.photo} id={item.id} date={item.created_at} />
            }else{
              return <ActionsCard key={item.id} lang={lang} title={item.titleRu} photo={item.photo} id={item.id} date={item.created_at} />
            }
          })}
        </div>
      </div>
    </div>
  )
  }

  function ActionsCard({lang, title, date, photo, id}){
    return(
      <div key={id} className="col-sm-6 col-md-4">
      <div className="card">
        <Link to="/actions/79" className="">
          <img alt={title} className="card-img-top lazyLoad isLoaded" src={photo} />
        </Link>
        <div className="card-body">
          <p className="card-date">{date}</p>
          <h5 className="card-title">
            <Link to={`${lang}/actions/${id}`} className="">{title}</Link>
          </h5>
        </div>
      </div>
    </div>
    )
  }

export default ActionsPageCard

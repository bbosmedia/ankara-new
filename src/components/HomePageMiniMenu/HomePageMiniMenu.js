import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './HomePageMiniMenu.css'

const HomePageMiniMenu = ({lang}) => {
    const [minimenu, setMinimenu] =  useState([]);

    const fetchMenuItems = async() =>{
        try{
            var items = await axios.get('https://api.ankara.uz/shop/category')
            setMinimenu(items.data);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchMenuItems()
    }, [lang])
    if(minimenu === null) return null;
    return (
        <div className="ya-mini-menu sticky-top" style={{top: "63px"}}>
        <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">
            {minimenu.map(item => <HomePageMiniMenuItem key={item.id} lang={lang} item={item} /> )}
        </div>
        </div>
        </div>
    )
}

const HomePageMiniMenuItem =({lang, item}) =>{
    if(lang === '/uz'){
        return (
            <a href={`/uz/#${item.id}`} className="ya-mini-menu-item">
                <img className="img-fluid mx-auto d-block rounded-circle ya-grow lazyLoad isLoaded" src={item.photo} /> <span>{item.nameUz}</span>
                </a>
        )
    }else if(lang === '/en'){
        return (
            <a href={`/en/#${item.id}`} className="ya-mini-menu-item">
                <img className="img-fluid mx-auto d-block rounded-circle ya-grow lazyLoad isLoaded" src={item.photo} /> <span>{item.nameEn}</span>
                </a>
        )
    }else{
        return (
            <a href={`/#${item.id}`} className="ya-mini-menu-item">
                <img className="img-fluid mx-auto d-block rounded-circle ya-grow lazyLoad isLoaded" src={item.photo} /> <span>{item.nameRu}</span>
                </a>
        )
    }
}

export default HomePageMiniMenu

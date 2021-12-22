import React, { useState } from 'react'
import './Restaurant.css'
import RestaurantsList from '../../components/RestaurantPage/RestaurantsList';
import YandexMapRest from '../../components/RestaurantPage/YandexMapRest';

const RestaurantsPage = ({lang}) => {

    const [pagename, setPagename] = useState('resaturants');

    const setPageName = () =>{
        if(pagename === 'resaturants'){
            setPagename('map');
        }else{
            setPagename('resaturants');
        }
    }
    if(pagename === 'resaturants'){
        return (
            <div>
                <RestaurantsList lang={lang} setPageName={setPageName}/>
            </div>
        )
    }else{
        return <YandexMapRest lang={lang} setPagename={setPageName} />
    }
}




export default RestaurantsPage

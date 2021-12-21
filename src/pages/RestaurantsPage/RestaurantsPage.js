import React, { useState } from 'react'
import './Restaurant.css'
import RestaurantsList from '../../components/RestaurantPage/RestaurantsList';
import YandexMapRest from '../../components/RestaurantPage/YandexMapRest';

const RestaurantsPage = () => {

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
                <RestaurantsList setPageName={setPageName}/>
            </div>
        )
    }else{
        return <YandexMapRest setPagename={setPageName} />
    }
}




export default RestaurantsPage

import React from 'react'
import { Link } from 'react-router-dom';

const RestaurantListItem = ({name, address, phoneNumber, time, id, lang}) => {
    if(lang === '/en'){
        return(
            <tr >
            <td >
               <p ><Link to={`/en/restaurants/${id}`} className="ya-restaurant-link">{name}</Link></p>
               <p className="ya-restaurant-ld"><span >Address:</span><br />{address}
               </p>
            </td>
            <td >
               <p className="ya-restaurant-ld"><span >Phone:</span><br />{phoneNumber}
               </p>
               <p className="ya-restaurant-ld"><span >Working hours:</span><br />{time}
               </p>
            </td>
            <td className="text-right">
               <p className="mb-4"><img height="30" className="mr-2 lazyLoad isLoaded" src="/images/iconsrestaurant/ic_wifi.fce2aa5.svg" /> <img height="30" className="mr-2 lazyLoad isLoaded" src="/images/iconsrestaurant/ic_parking.d9f87ef.svg" /> <img height="30" src="/images/iconsrestaurant/ic_360w.43e7c40.svg" className="lazyLoad isLoaded" /></p>
               <div ><Link to={`/en/restaurants/${id}`} className="ya-restaurant-more">More about the branch</Link></div>
            </td>
         </tr>
        )
    }else if(lang === '/uz'){
        return(
            <tr >
            <td >
               <p ><Link to={`/uz/restaurants/${id}`} className="ya-restaurant-link">{name}</Link></p>
               <p className="ya-restaurant-ld"><span >Manzil:</span><br />{address}
               </p>
            </td>
            <td >
               <p className="ya-restaurant-ld"><span >Telefon:</span><br />{phoneNumber}
               </p>
               <p className="ya-restaurant-ld"><span >Ish vaqti:</span><br />{time}
               </p>
            </td>
            <td className="text-right">
               <p className="mb-4">
               <img height="30" className="mr-2 lazyLoad isLoaded" src="/images/iconsrestaurant/ic_wifi.fce2aa5.svg" />
                  <img height="30" className="mr-2 lazyLoad isLoaded" src="/images/iconsrestaurant/ic_parking.d9f87ef.svg" />
                  <img height="30" src="/images/iconsrestaurant/ic_360w.43e7c40.svg" className="lazyLoad isLoaded" />
                  </p>
               <div ><Link to={`/uz/restaurants/${id}`} className="ya-restaurant-more">Shahobcha haqida batafsil</Link></div>
            </td>
         </tr>
        )
    }else{
        return(
            <tr >
            <td >
               <p ><Link to={`/restaurants/${id}`} className="ya-restaurant-link">{name}</Link></p>
               <p className="ya-restaurant-ld"><span >Адрес:</span><br />{address}
               </p>
            </td>
            <td >
               <p className="ya-restaurant-ld"><span >Телефон:</span><br />{phoneNumber}
               </p>
               <p className="ya-restaurant-ld"><span >Время работы:</span><br />{time}
               </p>
            </td>
            <td className="text-right">
               <p className="mb-4">
                  <img height="30" className="mr-2 lazyLoad isLoaded" src="/images/iconsrestaurant/ic_wifi.fce2aa5.svg" />
                  <img height="30" className="mr-2 lazyLoad isLoaded" src="/images/iconsrestaurant/ic_parking.d9f87ef.svg" />
                  <img height="30" src="/images/iconsrestaurant/ic_360w.43e7c40.svg" className="lazyLoad isLoaded" />
                  </p>
               <div ><Link to={`/restaurants/${id}`} className="ya-restaurant-more">Подробнее о филиале</Link></div>
            </td>
         </tr>
        );
    }
}

export default RestaurantListItem
